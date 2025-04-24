import Link from 'next/link';
import { Button } from '@/components/ui/Button'; // Import the Button component

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          {/* SVG Logo */}
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1028 1082"
            preserveAspectRatio="xMidYMid meet"
            className="h-8 w-auto fill-current text-primary"
          >
            <g transform="translate(0.000000,1082.000000) scale(0.100000,-0.100000)"
              stroke="none">
              <path d="M5045 10714 c-22 -2 -94 -8 -160 -14 -1146 -105 -2018 -647 -2580
              -1604 -347 -592 -586 -1426 -675 -2361 -24 -249 -40 -582 -46 -945 l-6 -385
              -491 -945 -491 -945 -1 -70 c0 -59 4 -77 28 -118 30 -50 111 -107 155 -107 13
              0 37 -7 54 -16 17 -9 185 -42 372 -73 l341 -57 7 -34 c4 -19 17 -105 29 -190
              77 -571 234 -1088 452 -1483 228 -415 542 -729 914 -916 285 -142 655 -231
              964 -231 86 0 102 3 150 28 160 83 160 308 2 395 -42 22 -68 27 -203 37 -691
              50 -1162 371 -1481 1010 -182 365 -293 787 -369 1397 -14 114 -24 162 -42 193
              -13 24 -34 63 -46 89 -58 113 -75 120 -446 181 -171 28 -311 52 -313 54 -2 2
              677 1311 852 1643 22 40 23 51 28 520 7 561 26 862 82 1268 132 956 426 1723
              858 2240 415 496 942 795 1627 924 403 76 944 86 1435 26 241 -29 445 -62 565
              -91 1198 -290 2022 -844 2394 -1608 296 -608 343 -1344 145 -2251 -140 -637
              -340 -1121 -615 -1492 -97 -131 -303 -328 -434 -415 -434 -290 -951 -363
              -1655 -233 -71 13 -132 22 -137 19 -10 -6 -146 29 -275 72 -586 196 -907 472
              -1043 897 -6 20 -20 83 -30 140 -17 95 -18 110 -3 222 60 471 252 774 600 949
              124 62 219 90 468 141 404 83 513 114 692 200 384 184 649 502 762 915 18 63
              41 147 52 187 26 94 37 380 20 538 -71 654 -433 1098 -1106 1356 -84 33 -124
              43 -170 43 -128 0 -215 -91 -215 -226 0 -108 53 -166 202 -222 403 -152 645
              -363 768 -669 129 -323 103 -765 -66 -1097 -148 -290 -411 -468 -799 -541 -60
              -11 -139 -27 -175 -35 -36 -9 -106 -24 -156 -35 -671 -141 -1087 -513 -1258
              -1127 -99 -356 -89 -690 30 -983 84 -206 178 -353 318 -498 174 -179 321 -286
              556 -405 567 -289 1383 -425 1985 -330 862 134 1492 695 1870 1664 31 80 63
              160 72 179 32 69 141 465 186 676 95 441 130 746 131 1130 0 547 -100 1009
              -310 1432 -416 837 -1201 1418 -2389 1768 -286 84 -591 154 -698 159 -40 2
              -126 11 -192 20 -243 32 -338 38 -690 41 -198 1 -378 1 -400 -1z"/>
            </g>
          </svg>
          <span className="font-semibold text-xl font-body text-primary">MentalEdge</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link href="/blog" className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
            Blog
          </Link>
          <Link href="/assessment" className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
            Assessment
          </Link>
          <Button href="/coming-soon" size="sm" variant="default">
            Start Free
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header; 