import { withAuth } from "next-auth/middleware";


export default withAuth({
    pages:{
        signIn:"/social"
    }
});
export const config={
    matcher:[
        "/social/users/:path*",
        "/social/conversations/:path*"
    ]
}