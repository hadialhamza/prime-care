import { withAuth } from "next-auth/middleware";

export default withAuth({
  // যদি ইউজার লগইন না থাকে, তবে তাকে এই পেজে পাঠানো হবে
  pages: {
    signIn: "/login",
  },
});

export const config = {
  // কোন কোন রাউট প্রোটেক্টেড থাকবে
  matcher: ["/booking/:path*", "/my-bookings"],
};
