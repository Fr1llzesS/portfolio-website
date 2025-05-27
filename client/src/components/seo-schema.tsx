export default function SEOSchema() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Курдюмов Вячеслав Борисович",
    "alternateName": "Kurdjumov Vjacheslav Borisovich",
    "jobTitle": "Горный инженер-маркшейдер",
    "description": "Горный инженер-маркшейдер с опытом работы 1+ год в области маркшейдерского обеспечения горных работ",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Хабаровск",
      "addressRegion": "Хабаровский край",
      "addressCountry": "RU"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Хабаровский технический колледж",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Хабаровск",
        "addressCountry": "RU"
      }
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Маркшейдер",
      "occupationLocation": {
        "@type": "City",
        "name": "Хабаровск"
      },
      "skills": [
        "Маркшейдерские работы",
        "Геодезические измерения", 
        "Топографические съемки",
        "Горно-геологические изыскания",
        "Контроль безопасности горных работ",
        "AutoCAD",
        "Credo",
        "Геодезическое оборудование"
      ]
    },
    "knowsLanguage": [
      {
        "@type": "Language",
        "name": "Russian",
        "alternateName": "ru"
      },
      {
        "@type": "Language", 
        "name": "English",
        "alternateName": "en"
      },
      {
        "@type": "Language",
        "name": "German", 
        "alternateName": "de"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "professional",
      "availableLanguage": ["Russian", "English"]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Курдюмов Вячеслав - Портфолио маркшейдера",
    "alternateName": "Kurdjumov Vjacheslav - Mine Surveyor Portfolio",
    "url": typeof window !== 'undefined' ? window.location.origin : '',
    "description": "Профессиональное портфолио горного инженера-маркшейдера Курдюмова Вячеслава. Маркшейдерские работы, геодезические измерения, топографические съемки.",
    "author": {
      "@type": "Person",
      "name": "Курдюмов Вячеслав Борисович"
    },
    "inLanguage": ["ru"],
    "keywords": "маркшейдер, геодезические работы, горный инженер, топографическая съемка, Хабаровск"
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Маркшейдерские услуги",
    "description": "Профессиональные маркшейдерские и геодезические услуги в Хабаровском крае",
    "provider": {
      "@type": "Person",
      "name": "Курдюмов Вячеслав Борисович"
    },
    "areaServed": {
      "@type": "City",
      "name": "Хабаровск"
    },
    "serviceType": [
      "Маркшейдерские работы",
      "Геодезические измерения",
      "Топографические съемки",
      "Горно-геологические изыскания"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema)
        }}
      />
    </>
  );
}