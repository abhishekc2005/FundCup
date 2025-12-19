import { fetchuser } from "@/actions/useractions"
import PaymentPage from "@/components/PaymentPage"

export default async function UserPage({ params }) {
  const { username } = params

  // user exists ya nahi check karne ke liye
  const user = await fetchuser(username)

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        User not found
      </div>
    )
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* 
        Ye PaymentPage hi:
        - profile dikhata hai
        - payments fetch karta hai
        - Razorpay open karta hai
        - supporters list dikhata hai
      */}
      <PaymentPage username={username} />
    </div>
  )
}