"use client"

import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowRight, Bot, FileText, Shield, BarChart, PieChart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-20 items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/diversified-payments-logo.png"
              alt="Diversified Payments"
              width={200}
              height={50}
              className="h-10 w-auto"
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="#how-it-works" className="text-sm font-medium hover:text-blue-600 transition-colors">
              How It Works
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Benefits
            </Link>
            <Link href="#form" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Get Started
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="tel:817-398-8533"
              className="hidden md:flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span className="font-semibold">817-398-8533</span>
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Free AI Audit</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-gray-50">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-400 filter blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-blue-300 filter blur-3xl"></div>
          </div>
          <div className="container relative">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm mb-8">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                ATTENTION: BUSINESS OWNERS
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                FREE <span className="text-blue-600">AI AUDIT</span> OF YOUR MERCHANT ACCOUNT!
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl">
                <span className="font-bold">Uncover Hidden Fees. Save Thousands.</span> Our proprietary AI technology
                analyzes your actual credit card processing statement to expose what your provider doesn't want you to
                see.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg py-6 px-8 rounded-lg"
                >
                  Watch AI In Action
                </Button>
              </div>
              <div className="flex items-center gap-4 mb-16">
                <div className="flex -space-x-3">
                  <div className="inline-block h-12 w-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                    <Image
                      src="/business-owner-1.jpeg"
                      alt="Business Owner"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="inline-block h-12 w-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                    <Image
                      src="/business-owner-2.jpeg"
                      alt="Business Owner"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="inline-block h-12 w-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                    <Image
                      src="/business-owner-3.jpeg"
                      alt="Business Owner"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="inline-block h-12 w-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                    <Image
                      src="/business-owner-4.jpeg"
                      alt="Business Owner"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-gray-700">
                  <span className="font-bold text-blue-600">1,000+ businesses</span> already saved millions
                </div>
              </div>

              <div className="w-full max-w-3xl">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 opacity-30 blur-xl"></div>
                  <div className="relative rounded-2xl bg-white p-8 shadow-2xl border border-gray-100">
                    <div className="mb-8 text-center">
                      <h3 className="text-2xl font-bold">Our AI Audit Reveals:</h3>
                      <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="flex flex-col items-center text-center p-4">
                        <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                          <CheckCircle className="h-6 w-6 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-lg mb-2">Hidden Junk Fees</h4>
                        <p className="text-gray-600">
                          Rate padding and junk fees your provider doesn't want you to see
                        </p>
                      </div>
                      <div className="flex flex-col items-center text-center p-4">
                        <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                          <CheckCircle className="h-6 w-6 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-lg mb-2">True Effective Rate</h4>
                        <p className="text-gray-600">Your actual rate vs. what you're told you're paying</p>
                      </div>
                      <div className="flex flex-col items-center text-center p-4">
                        <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                          <CheckCircle className="h-6 w-6 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-lg mb-2">Potential Savings</h4>
                        <p className="text-gray-600">Customized savings based on your industry and volume</p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                        Get Your Free AI Audit
                      </Button>
                      <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
                        <Shield className="h-4 w-4" />
                        <span>No obligation. 100% confidential analysis.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Watch AI In Action Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">WATCH AI IN ACTION</h2>
              <p className="text-xl text-gray-600">
                See how our AI technology analyzes statements for different pricing models and recommends the best
                solution for your business
              </p>
              <div className="h-1 w-20 bg-blue-600 mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Interchange Cost Plus Pricing",
                  description:
                    "See how our AI analyzes statements where merchants absorb all processing costs and identifies potential savings opportunities",
                  badge: "Traditional Model",
                },
                {
                  title: "Surcharge Pricing Analysis",
                  description:
                    "Watch our AI evaluate statements where credit card fees are passed to customers while merchants absorb low-cost debit transactions",
                  badge: "Fee Pass-Through",
                },
                {
                  title: "Dual-Pricing Evaluation",
                  description:
                    "Discover how our AI shows zero-cost processing benefits with cash vs. card pricing - our recommended solution",
                  badge: "Preferred Model",
                },
              ].map((video, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="relative aspect-video bg-gray-100 overflow-hidden">
                    <Image
                      src={`/ai-financial-analysis-thumbnail.png?height=400&width=600&query=ai financial analysis video thumbnail ${index + 1}`}
                      alt={video.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-blue-600 bg-opacity-90 flex items-center justify-center shadow-lg cursor-pointer hover:bg-opacity-100 transition-all">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    {video.badge && (
                      <div
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium mb-3 ${
                          video.badge === "Preferred Model"
                            ? "bg-green-100 text-green-700 border border-green-200"
                            : "bg-blue-100 text-blue-700 border border-blue-200"
                        }`}
                      >
                        {video.badge}
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                    <p className="text-gray-600">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Get Your Free AI Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "$40M+", label: "Saved for Businesses" },
                { value: "1,000+", label: "Businesses Helped" },
                { value: "98%", label: "Found Hidden Fees" },
                { value: "3.2%", label: "Average Rate Reduction" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-gray-600 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">SUPER SIMPLE 3-STEP PROCESS</h2>
              <p className="text-xl text-gray-600">
                Get your free AI audit in minutes and discover how much you could be saving
              </p>
              <div className="h-1 w-20 bg-blue-600 mx-auto mt-6 rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-200 -translate-y-1/2 z-0"></div>
              {[
                {
                  title: "Registration Form",
                  description: "Complete the FREE AI Audit Registration form with your basic information",
                  icon: <FileText className="h-10 w-10 text-blue-600" />,
                },
                {
                  title: "Statement Analysis",
                  description: "Upload or email us your most recent processing statement for AI to analyze",
                  icon: <Bot className="h-10 w-10 text-blue-600" />,
                },
                {
                  title: "Receive Results",
                  description: "Get your analysis results in PDF format with detailed cost + savings",
                  icon: <BarChart className="h-10 w-10 text-blue-600" />,
                },
              ].map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 relative z-10">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <div className="mt-6 mb-4 flex justify-center">
                    <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Start Your Free AI Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-24 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">WHY BUSINESSES TRUST OUR AI AUDIT</h2>
              <p className="text-xl text-gray-600">
                Our proprietary AI technology delivers insights no human analyst can match
              </p>
              <div className="h-1 w-20 bg-blue-600 mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 items-center">
              <div className="order-2 md:order-1">
                <div className="grid gap-8">
                  {[
                    {
                      title: "Unmatched Accuracy",
                      description: "Our AI analyzes every line item with precision humans can't match",
                      icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
                    },
                    {
                      title: "Industry Benchmarking",
                      description: "Compare your rates against thousands of businesses in your industry",
                      icon: <BarChart className="h-6 w-6 text-blue-600" />,
                    },
                    {
                      title: "Hidden Fee Detection",
                      description: "Identify obscure fees and charges buried in complex statements",
                      icon: <Shield className="h-6 w-6 text-blue-600" />,
                    },
                    {
                      title: "Actionable Insights",
                      description: "Get specific recommendations to reduce your processing costs",
                      icon: <PieChart className="h-6 w-6 text-blue-600" />,
                    },
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all shadow-sm"
                    >
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 opacity-20 blur-xl"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                    <Image
                      src="/ai-financial-analysis.png"
                      alt="AI Analysis"
                      width={600}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">WHAT OUR CLIENTS SAY</h2>
              <p className="text-xl text-gray-600">Businesses like yours are saving thousands with our AI audit</p>
              <div className="h-1 w-20 bg-blue-600 mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Michael Johnson",
                  business: "Johnson's Restaurant",
                  quote:
                    "The AI audit found over $12,000 in hidden fees we didn't know we were paying. Switching to their recommended plan saved us $1,400 every month.",
                  image: "/placeholder-hi6fm.png",
                  stars: 5,
                },
                {
                  name: "Sarah Williams",
                  business: "Williams Medical Clinic",
                  quote:
                    "As a medical practice, we process thousands in payments monthly. Their AI audit was eye-opening - we were being charged 1.2% more than industry standard.",
                  image: "/female-doctor-headshot.png",
                  stars: 5,
                },
                {
                  name: "Robert Chen",
                  business: "Chen's Auto Repair",
                  quote:
                    "I was skeptical at first, but the AI audit showed exactly where we were being overcharged. We've saved over $8,000 in our first year after switching.",
                  image: "/placeholder-prpkl.png",
                  stars: 5,
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="h-16 w-16 rounded-full object-cover border-2 border-blue-100"
                    />
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.business}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {Array(testimonial.stars)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5 text-yellow-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Warning Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                If you're accepting credit cards, there's a good chance you're overpaying—by a lot.
              </h2>
              <p className="text-xl mb-8">
                Receive a detailed PDF report showing exactly how much you're being overcharged—and what you should be
                paying.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Get Your Free AI Audit Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section id="form" className="py-24 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-bold mb-6">AI PRICING ANALYSIS REGISTRATION</h2>
                  <div className="h-1 w-20 bg-blue-600 mb-6 rounded-full"></div>
                  <p className="text-gray-600 mb-8">
                    Complete the form to schedule your free AI audit consultation. We'll send you instructions to submit
                    your statement via SMS and email after you schedule your call.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8">
                    <h3 className="font-bold text-lg mb-4">What You'll Receive:</h3>
                    <ul className="space-y-4">
                      {[
                        "Personalized consultation call with a payment specialist",
                        "Instructions to easily submit your processing statement",
                        "Detailed AI analysis comparing all three pricing models",
                        "Custom savings calculation for your business",
                        "Recommendation for the best pricing model for your needs",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <Shield className="h-6 w-6 text-blue-600" />
                    <p className="text-sm text-blue-800">
                      Your information is secure and confidential. We never share your data with third parties.
                    </p>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">First Name *</label>
                          <input
                            type="text"
                            placeholder="First Name"
                            className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Last Name *</label>
                          <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Business Name *</label>
                        <input
                          type="text"
                          placeholder="Business Name"
                          className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">Phone *</label>
                          <input
                            type="tel"
                            placeholder="Phone"
                            className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Email *</label>
                          <input
                            type="email"
                            placeholder="Email"
                            className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <input type="checkbox" id="consent" className="mt-1.5" required />
                        <label htmlFor="consent" className="text-sm text-gray-600">
                          By checking this box, I consent to receive transactional messages related to my account,
                          orders, or services I have requested. Message frequency may vary. Message & Data rates may
                          apply. Reply HELP for help or STOP to opt-out.
                        </label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                      >
                        Schedule My Free Consultation
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Stop Overpaying?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our AI audit will show you exactly how much you're being overcharged and how to fix it
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Get Your Free AI Audit Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-blue-700 text-lg px-8 py-6 rounded-lg"
              >
                Call Us: 817-398-8533
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Simplified */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <Image
                src="/diversified-payments-logo.png"
                alt="Diversified Payments"
                width={200}
                height={50}
                className="h-10 w-auto brightness-200 contrast-200"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="tel:817-398-8533" className="text-gray-400 hover:text-white transition-colors">
                817-398-8533
              </Link>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
            <p>© {new Date().getFullYear()} Diversified Payments™ | All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
