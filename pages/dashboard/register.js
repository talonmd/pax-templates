import Link from "next/link"
import Head from "next/head"

import { useState } from "react"

import AvariceLogo from "../../assets/AvariceLogo"

import SignUp from "../../components/dashboard/sign-up-form"

export default function Register() {
  return (
    <>
      <div className="sign-in-and-sign-up">
        <div className="sign-in-and-sign-up__header">
          <AvariceLogo className="sign-in-and-sign-up__header-logo" />
        </div>
        <div className="sign-in-and-sign-up__form">
          <SignUp />
          <p className="sign-in-and-sign-up__form-footer-text">
            Already have an account?{" "}
            <Link href="/dashboard/register">
              <span className="sign-in-and-sign-up__form-footer-link">Sign in.</span>
            </Link>
          </p>
        </div>
        <div className="sign-in-and-sign-up__footer">
          <p className="sign-in-and-sign-up__footer-text">
            By signing in to Avarice, you agree to our <Link href="/">terms of service.</Link>
          </p>
        </div>
      </div>
    </>
  )
}
