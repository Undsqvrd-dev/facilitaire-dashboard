import 'next-auth'
import { Role } from '@prisma/client'

declare module 'next-auth' {
  interface User {
    id: string
    email: string
    role: Role
    name: string
  }

  interface Session {
    user: User & {
      id: string
      role: Role
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    role: Role
  }
} 