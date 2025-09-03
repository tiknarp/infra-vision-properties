import { useEffect } from 'react';
import { Navbar } from "@/components/ui/navbar";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { Gallery4 } from "@/components/ui/gallery4";
import { FeatureSteps } from "@/components/ui/feature-section";
import PartnersGallery from "@/components/ui/sticky-scroll";
import { ContactSection } from "@/components/ui/contact-section";
import { ConsultationSection } from "@/components/ui/consultation-section";
import { Footer } from "@/components/ui/footer";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

// Import images
import heroBg from "@/assets/hero-bg.jpg";
import realEstateVideo from "@/assets/real-estate-video.jpg";
import residential from "@/assets/residential.jpg";
import commercial from "@/assets/commercial.jpg";
import retail from "@/assets/retail.jpg";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Real estate gallery data with tabs
  const galleryTabs = [
    {
      id: "featured",
      label: "Featured",
      items: [
        {
          id: "luxury-residences",
          title: "Premium Residential Complexes",
          description: "Discover luxury apartments and villas in prime locations across Delhi NCR. Featuring modern amenities, premium finishes, and world-class facilities for discerning homebuyers.",
          href: "/properties/residential",
          image: residential,
        },
        {
          id: "commercial-spaces",
          title: "Prime Commercial Properties",
          description: "Invest in high-yield commercial real estate including office complexes, retail spaces, and mixed-use developments in strategic business districts.",
          href: "/properties/commercial",
          image: commercial,
        },
        {
          id: "retail-investment",
          title: "Retail & Shopping Centers",
          description: "Explore profitable retail investment opportunities in premium shopping malls and high-street commercial spaces with excellent footfall and growth potential.",
          href: "/properties/retail",
          image: retail,
        },
      ]
    },
    {
      id: "news",
      label: "News",
      items: [
        {
          id: "market-update-1",
          title: "Delhi NCR Property Market Soars 15% in Q4 2024",
          description: "Recent market analysis shows unprecedented growth in Delhi NCR real estate sector, driven by infrastructure development and policy reforms.",
          href: "/news/market-growth",
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
        },
        {
          id: "new-project-launch",
          title: "Luxury Project Launch in Gurgaon",
          description: "Birla Real Estate announces their newest luxury residential project featuring world-class amenities and sustainable design.",
          href: "/news/project-launch",
          image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop",
        },
        {
          id: "policy-update",
          title: "New RERA Guidelines Benefit Homebuyers",
          description: "Latest regulatory changes promise better transparency and faster project delivery timelines for property buyers.",
          href: "/news/rera-update",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
        },
      ]
    },
    {
      id: "research",
      label: "Research",
      items: [
        {
          id: "investment-analysis",
          title: "Real Estate Investment Trends 2024",
          description: "Comprehensive analysis of investment opportunities across residential, commercial, and retail sectors in Indian real estate market.",
          href: "/research/investment-trends",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
        },
        {
          id: "market-forecast",
          title: "Property Price Forecast Delhi NCR",
          description: "Data-driven insights into price movements and market dynamics across key micro-markets in Delhi NCR region.",
          href: "/research/price-forecast",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        },
        {
          id: "rental-yields",
          title: "Rental Yield Analysis by Location",
          description: "Detailed study of rental returns across different property types and locations to help investors make informed decisions.",
          href: "/research/rental-yields",
          image: "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1000&auto=format&fit=crop",
        },
      ]
    },
    {
      id: "blogs",
      label: "Blogs",
      items: [
        {
          id: "buying-guide",
          title: "First-Time Home Buyer's Complete Guide",
          description: "Essential tips and insights for first-time property buyers navigating the Delhi NCR real estate market successfully.",
          href: "/blog/buying-guide",
          image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1000&auto=format&fit=crop",
        },
        {
          id: "investment-tips",
          title: "5 Smart Real Estate Investment Strategies",
          description: "Expert advice on building a profitable real estate portfolio with strategic investment approaches and market timing.",
          href: "/blog/investment-tips",
          image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop",
        },
        {
          id: "legal-guide",
          title: "Understanding Property Documentation",
          description: "Complete guide to legal aspects of property purchase including documentation, approvals, and compliance requirements.",
          href: "/blog/legal-guide",
          image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop",
        },
      ]
    }
  ];

  // Services data
  const servicesData = [
    {
      step: "Residential Properties",
      title: "Luxury Residential Solutions",
      content: "From elegant apartments to sprawling villas, we help you find the perfect home that matches your lifestyle and investment goals.",
      image: residential,
    },
    {
      step: "Commercial Real Estate",
      title: "Prime Commercial Investments",
      content: "Strategic commercial properties in business districts offering excellent returns and growth potential for savvy investors.",
      image: commercial,
    },
    {
      step: "Investment Advisory",
      title: "Expert Investment Guidance",
      content: "Professional advisory services to maximize your real estate portfolio with data-driven insights and market expertise.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
    },
    {
      step: "Retail Spaces",
      title: "Premium Retail Opportunities",
      content: "High-traffic retail spaces in premium locations, perfect for businesses looking to establish a strong market presence.",
      image: retail,
    },
    {
      step: "Market Intelligence",
      title: "Real Estate Analytics",
      content: "Comprehensive market research and analytics to help you make informed decisions with our proprietary data insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    },
    {
      step: "Legal & Documentation",
      title: "Complete Legal Support",
      content: "End-to-end legal assistance including documentation, due diligence, and compliance to ensure smooth transactions.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <LoadingSpinner />
      <div className="min-h-screen">
        <Navbar />
        
        {/* Hero Section with Scroll Expansion */}
        <ScrollExpandMedia
          mediaType="image"
          mediaSrc={realEstateVideo}
          bgImageSrc={heroBg}
          title="Aim Infra Build"
          date="Established 1995"
          scrollToExpand="Excellence in Real Estate"
          textBlend={true}
        >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            About Aim Infra Build
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              For over 25 years, Aim Infra Build has been a trusted name in Delhi NCR's real estate landscape. 
              Since 1995, we have successfully facilitated over ₹2500 crores worth of property transactions, 
              establishing ourselves as a premier real estate consultant in the region.
            </p>
            <p>
              Our partnerships with industry leaders like Birla Real Estate, Elan, DLF, Godrej Properties, 
              and Indiabulls ensure that our clients have access to the finest properties and exclusive 
              investment opportunities across India.
            </p>
            <p>
              From luxury residences to prime commercial spaces, we provide comprehensive real estate 
              solutions tailored to meet your unique requirements and investment goals.
            </p>
          </div>
        </div>
        </ScrollExpandMedia>

        {/* Featured Properties Gallery with Tabs */}
        <div id="properties">
          <Gallery4 
            title="Explore Our Portfolio"
            description="Discover premium properties, latest market insights, research reports, and expert advice from our real estate professionals."
            tabs={galleryTabs}
            items={galleryTabs[0].items}
          />
        </div>

        {/* Services Section */}
        <div id="services">
          <FeatureSteps
            features={servicesData}
            title="Our Comprehensive Services"
            autoPlayInterval={5000}
          />
        </div>

        {/* Partners Section */}
        <div id="partners">
          <PartnersGallery />
        </div>

        {/* Consultation Section */}
        <ConsultationSection />

        {/* Contact Section */}
        <div id="contact">
          <ContactSection />
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Index;