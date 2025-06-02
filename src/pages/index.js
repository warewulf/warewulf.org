import React from "react"
import { Link } from "gatsby"

import { CubeTransparentIcon, ChartBarIcon, CheckIcon, ShieldCheckIcon } from '@heroicons/react/outline'

import Layout from "../components/layout"
import Seo from "../components/seo"

const features = [
  {
    name: 'Extensible',
    description: 'Easy to change the default functionality, node images, and customize for any clustering use-case.',
    icon: CubeTransparentIcon,
  },
  {
    name: 'Scalable',
    description: 'From tens to tens of thousands of compute systems.',
    icon: ChartBarIcon,
  },
  {
    name: 'Easy',
    description: 'Minimal system requirements, easy to get started, and simple to optimize, customize, and integrate.',
    icon: CheckIcon,
  },
  {
    name: 'Secure',
    description: 'Stateless provisioning supporting SELinux, per-node asset key based provisioning, and access controls.',
    icon: ShieldCheckIcon,
  },
]


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
        <div className="relative h-full max-w-7xl mx-auto">
          <svg
            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>
      </div>
    </div>
    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 pb-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Cluster Management & Provisioning</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Being open source for over two-decades, and pioneering the concept of stateless node management, Warewulf is among the most successful HPC cluster platforms in the industry with support from OpenHPC, contributors around the world, and usage from every industry.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to="/getting-started"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded text-white bg-green-900 hover:bg-green-800 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  to="/help"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded text-green-900 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Need help?
                </Link>
              </div>
            </div>
          </div>
        </main>

        <div className="bg-green-900">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">Scalable. Flexible.</h2>
        <p className="mt-4 max-w-3xl text-lg text-green-200">
        Today, Warewulf unites the ecosystem with the ability to provision containers directly to the bare metal hardware at massive scale, simplistically while retaining massive flexibility.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name}>
              <div>
                <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                <p className="mt-2 text-base text-green-200">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="bg-green-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-green-600">Get started today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              to="/getting-started"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded text-white bg-green-900 hover:bg-green-800"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>

  </Layout>
)

export default IndexPage
