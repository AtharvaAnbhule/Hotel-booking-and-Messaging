export { default } from "next-auth/middleware";

import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: [
        "/hotels/trips",
        "/hotels/reservation",
        "/hotels/properties",
        "/hotels/favourites",
    ]
}


