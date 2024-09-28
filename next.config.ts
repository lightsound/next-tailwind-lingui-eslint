import type { NextConfig } from 'next'

export default {
  experimental: {
    ppr: true,
    dynamicIO: true,
    swcPlugins: [['@lingui/swc-plugin', {}]],
  },
} satisfies NextConfig
