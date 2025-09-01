"use client";

import { useState, useEffect } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const propertyTypes = [
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
  { label: "Retail", value: "retail" },
  { label: "Investment", value: "investment" },
  { label: "Industrial", value: "industrial" },
];

const cities = [
  "New Delhi", "Gurgaon", "Noida", "Faridabad", "Ghaziabad", 
  "Greater Noida", "Dwarka", "Rohini", "Vasant Kunj", "Connaught Place",
  "Saket", "Lajpat Nagar", "Janakpuri", "Pitampura", "Mayur Vihar"
];

const navigationItems = [
  { name: 'Properties', href: '#properties' },
  { name: 'Services', href: '#services' },
  { name: 'Partners', href: '#partners' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [isPropertyDropdownOpen, setIsPropertyDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg" 
        : "bg-transparent"
    )}>
      <div className={cn(
        "container mx-auto px-4 transition-all duration-300",
        isScrolled && "max-w-6xl rounded-2xl mt-2 border bg-background/90 backdrop-blur-lg"
      )}>
        <div className="flex items-center justify-between h-16">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold text-foreground">Aim Infra Build</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Items */}
            <div className="flex items-center space-x-6">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {/* Property Type Dropdown */}
              <div className="relative">
              <button
                onClick={() => setIsPropertyDropdownOpen(!isPropertyDropdownOpen)}
                className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <span>{selectedPropertyType || "Property Type"}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isPropertyDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-luxury border border-border z-50">
                  {propertyTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => {
                        setSelectedPropertyType(type.label);
                        setIsPropertyDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Bar with City Dropdown */}
            <div className="relative">
              <div className="flex items-center bg-muted rounded-lg">
                <input
                  type="text"
                  placeholder="Search cities..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsCityDropdownOpen(e.target.value.length > 0);
                  }}
                  onFocus={() => setIsCityDropdownOpen(searchQuery.length > 0)}
                  className="px-4 py-2 bg-transparent border-none outline-none text-sm w-64"
                />
                <Button size="sm" variant="ghost" className="px-3">
                  <Search className="w-4 h-4" />
                </Button>
              </div>

              {isCityDropdownOpen && filteredCities.length > 0 && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-lg shadow-luxury border border-border z-50 max-h-48 overflow-y-auto">
                  {filteredCities.map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        setSearchQuery(city);
                        setIsCityDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-4">
              {/* Mobile Property Type Selection */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Property Type
                </label>
                <select
                  value={selectedPropertyType}
                  onChange={(e) => setSelectedPropertyType(e.target.value)}
                  className="w-full px-3 py-2 bg-muted rounded-lg border border-border text-sm"
                >
                  <option value="">Select Property Type</option>
                  {propertyTypes.map((type) => (
                    <option key={type.value} value={type.label}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mobile Search */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Search Cities
                </label>
                <div className="flex items-center bg-muted rounded-lg">
                  <input
                    type="text"
                    placeholder="Search cities..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-3 py-2 bg-transparent border-none outline-none text-sm"
                  />
                  <Button size="sm" variant="ghost" className="px-3">
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <Button variant="luxury" className="w-full">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}