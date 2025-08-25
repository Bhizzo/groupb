import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background border-t py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
               <Image
            src="/images/logo.png"
            alt="Logo"
            width={90}
            height={90}
            />
            </div>
            <p className="text-sm text-muted-foreground">© 2025 GROUP B Technologies</p>
            <p className="text-sm text-muted-foreground">All Rights Reserved</p>
            <p className="text-sm text-muted-foreground mt-2">K-TAXPPAN</p>
            <p className="text-sm text-muted-foreground">XND17GU9M</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Versa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Finance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Management Consulting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Technology Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">The Future of Data</h3>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Statement
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}