import React from 'react';
import { Phone, Mail, Share2, MapPin, Globe } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const DigitalCard = () => {
  const cardData = {
    name: 'BlogCodeX',
    title: 'Your Trusted IT Company',
    phone: '+91 7397776898',
    email: 'info@blogcodex.com',
    location: 'Near Nehru Stadium, Coimbatore.',
    website: 'www.blogcodex.com',
    instagram: 'https://instagram.com/yourusername',
    facebook: 'https://facebook.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    services: {
      equity: [
        'Web Application',
        'Digital Marketing',
        'Software Development',
      ],
      financial: [
        'CRM, ERP, HRM & POS',
        'School & Hospital Management',
        'News Portals & Many more',
      ],
    },
  };

  const saveContact = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:${cardData.name}
FN:${cardData.name}
ORG:${cardData.title}
TEL;TYPE=work,voice:${cardData.phone}
EMAIL:${cardData.email}
ADR;TYPE=work:;;${cardData.location}
URL:${cardData.website}
END:VCARD
    `;
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${cardData.name.replace(/ /g, '_')}.vcf`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const socialLinks = [
    {
      name: 'Call',
      icon: <Phone className="w-4 h-4" />,
      action: () => window.open(`tel:${cardData.phone}`),
    },
    {
      name: 'WhatsApp',
      icon: <Globe className="w-4 h-4" />,
      action: () => window.open(`https://wa.me/${cardData.phone.replace(/[^\d]/g, '')}`),
    },
    {
      name: 'Website',
      icon: <Globe className="w-4 h-4" />,
      action: () => window.open(`https://${cardData.website}`),
    },
    {
      name: 'Email',
      icon: <Mail className="w-4 h-4" />,
      action: () => window.open(`mailto:${cardData.email}`),
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-800 via-navy-700 to-navy-600">
      <Card className="w-full max-w-full sm:max-w-lg overflow-hidden transition-all duration-500 hover:shadow-2xl">
        <div
          className="relative h-40 bg-cover"
          style={{
            backgroundImage: "url('/banner.jpeg')",
            backgroundPosition: 'center 20%',
          }}
        >
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex justify-center items-center">
            <div className="w-24 sm:w-32 h-24 sm:h-32 rounded-full border-2 border-blue-500 overflow-hidden bg-white">
              <img
                src="/Logo2.png"
                alt="Company Logo"
                className="object-cover transition-transform duration-300 scale-90"  // Increased scale for zoom
                style={{ marginTop: '10px' }}  // Moves only the PNG down
              />
            </div>
          </div>
        </div>

        <CardContent className="pt-24 pb-8">
          <div className="text-center space-y-2 mb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-navy-800">{cardData.name}</h2>
            <p className="text-sm sm:text-base text-navy-500">{cardData.title}</p>
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-navy-600">
              <MapPin className="w-4 h-4" />
              <span>{cardData.location}</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6 text-gray-600 mb-8">
            <a href={cardData.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-all duration-300">
              <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" />
            </a>
            <a href={cardData.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-all duration-300">
              <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </a>
            <a href={cardData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-all duration-300">
              <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="outline"
                className="w-full transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
                onClick={link.action}
              >
                {link.icon}
                <span className="ml-2">{link.name}</span>
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="space-y-3">
              <h3 className="font-semibold text-navy-800 mb-2 text-center">Our Services</h3>
              {cardData.services.equity.map((service) => (
                <Badge
                  key={service}
                  variant="secondary"
                  className="block w-full text-center py-1 bg-blue-50 text-blue-600 hover:bg-blue-100"
                >
                  {service}
                </Badge>
              ))}
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-navy-800 mb-2 text-center">Our Products</h3>
              {cardData.services.financial.map((service) => (
                <Badge
                  key={service}
                  variant="secondary"
                  className="block w-full text-center py-1 bg-blue-50 text-blue-600 hover:bg-blue-100"
                >
                  {service}
                </Badge>
              ))}
            </div>
          </div>

          <Button
            className="w-full bg-gradient-to-r from-blue-400 to-teal-500 hover:from-blue-500 hover:to-teal-600 text-white"
            onClick={saveContact}
          >
            <Share2 className="w-4 h-4 mr-2" />
            Save Contact
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DigitalCard;
