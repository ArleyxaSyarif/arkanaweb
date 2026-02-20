import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface PricingData {
  websiteTypeId: number;
  industryId: number;
  featureIds: number[];
  pages: number;
}

export async function POST(req: Request) {
  try {
    const body: PricingData = await req.json();

    const websiteType = await prisma.websiteType.findUnique({
      where: { id: body.websiteTypeId },
    });
    if (!websiteType) return NextResponse.json({ error: "Website type not found" }, { status: 404 });

    const industry = await prisma.industry.findUnique({
      where: { id: body.industryId },
    });
    if (!industry) return NextResponse.json({ error: "Industry not found" }, { status: 404 });

    const features = await prisma.feature.findMany({
      where: { id: { in: body.featureIds } },
    });

    const perPagePrice = 200_000;

    const totalPrice =
      websiteType.basePrice +
      industry.extraPrice +
      features.reduce((acc, f) => acc + f.price, 0) +
      body.pages * perPagePrice;

    return NextResponse.json({
      websiteType: websiteType.name,
      industry: industry.name,
      features: features.map(f => f.name),
      pages: body.pages,
      totalPrice,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to calculate price" }, { status: 500 });
  }
}