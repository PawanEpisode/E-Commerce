import { NextResponse} from "next/server";
import { productData }  from "@/constants/data";

export const GET = async () => {
    try {
        return NextResponse.json({
            message: "Products fetched successfully",
            success: true,
            productData,
        })
    } catch (error) {
        return NextResponse.json(
            {
                error: "Product Loading Error",
            },
            { status: 500 }
        )
    }
}