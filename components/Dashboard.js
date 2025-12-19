"use client"

import React, { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { fetchuser, updateProfile } from "@/actions/useractions"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Dashboard = () => {
  const { data: session, update } = useSession()
  const router = useRouter()

  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    profilepic: "",
    coverpic: "",
    razorpayid: "",
    razorpaysecret: "",
  })

  // Fetch user data
  const getData = useCallback(async () => {
    if (!session?.user?.name) return
    const user = await fetchuser(session.user.name)
    if (user) {
      setForm(prev => ({ ...prev, ...user }))
    }
  }, [session])

  useEffect(() => {
    document.title = "Dashboard - FundCup"
    if (!session) {
      router.push("/login")
    } else {
      getData()
    }
  }, [session, router, getData])

  // Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  // Submit form
  const handleSubmit = async (e) => {
    update()
    await updateProfile(e, session.user.name)
    toast.success("Profile updated successfully!")
  }

  return (
    <>
      <ToastContainer theme="dark" />

      <div className="min-h-screen bg-gray-900 text-white flex justify-center">
        <div className="w-full max-w-xl mt-28 px-4">

          <h1 className="text-center text-2xl font-bold mb-8">
            Welcome to your Dashboard
          </h1>

          <form action={handleSubmit} className="flex flex-col gap-4">

            {/* NAME */}
            <label className="text-sm font-semibold">Name</label>
            <input
              name="name"
              value={form.name || ""}
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-2 rounded bg-gray-800"
            />

            {/* EMAIL */}
            <label className="text-sm font-semibold">Email</label>
            <input
              name="email"
              value={form.email || ""}
              onChange={handleChange}
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800"
            />

            {/* USERNAME */}
            <label className="text-sm font-semibold">Username</label>
            <input
              name="username"
              value={form.username || ""}
              onChange={handleChange}
              placeholder="Enter your username"
              className="p-2 rounded bg-gray-800"
            />

            {/* PROFILE PIC */}
            <label className="text-sm font-semibold">
              Profile Picture URL
            </label>
            <input
              name="profilepic"
              value={form.profilepic || ""}
              onChange={handleChange}
              placeholder="https://example.com/profile.jpg"
              className="p-2 rounded bg-gray-800"
            />

            {/* COVER PIC */}
            <label className="text-sm font-semibold">
              Cover Picture URL
            </label>
            <input
              name="coverpic"
              value={form.coverpic || ""}
              onChange={handleChange}
              placeholder="https://example.com/cover.jpg"
              className="p-2 rounded bg-gray-800"
            />

            {/* RAZORPAY ID */}
            <label className="text-sm font-semibold">
              Razorpay ID
            </label>
            <input
              name="razorpayid"
              value={form.razorpayid || ""}
              onChange={handleChange}
              placeholder="rzp_test_xxxxxxxxxx"
              className="p-2 rounded bg-gray-800"
            />

            {/* RAZORPAY SECRET */}
            <label className="text-sm font-semibold">
              Razorpay Secret
            </label>
            <input
              name="razorpaysecret"
              value={form.razorpaysecret || ""}
              onChange={handleChange}
              placeholder="Enter Razorpay Secret"
              className="p-2 rounded bg-gray-800"
            />

            {/* SAVE */}
            <button
              type="submit"
              className="mt-6 bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold"
            >
              Save
            </button>

          </form>
        </div>
      </div>
    </>
  )
}

export default Dashboard