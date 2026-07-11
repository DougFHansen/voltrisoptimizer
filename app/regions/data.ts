export interface RegionCity {
    slug: string;
    name: string;
}

export interface RegionCountry {
    slug: string;
    name: string;
    continent: string;
    cities: RegionCity[];
}

export const regionsData: RegionCountry[] = [
    // North America
    {
        slug: 'usa',
        name: 'United States',
        continent: 'North America',
        cities: [
            { slug: 'new-york', name: 'New York' },
            { slug: 'los-angeles', name: 'Los Angeles' },
        ]
    },
    {
        slug: 'canada',
        name: 'Canada',
        continent: 'North America',
        cities: [
            { slug: 'toronto', name: 'Toronto' },
            { slug: 'vancouver', name: 'Vancouver' },
        ]
    },
    {
        slug: 'mexico',
        name: 'Mexico',
        continent: 'North America',
        cities: [
            { slug: 'mexico-city', name: 'Mexico City' }
        ]
    },
    
    // Europe
    {
        slug: 'uk',
        name: 'United Kingdom',
        continent: 'Europe',
        cities: [
            { slug: 'london', name: 'London' }
        ]
    },
    {
        slug: 'france',
        name: 'France',
        continent: 'Europe',
        cities: [
            { slug: 'paris', name: 'Paris' }
        ]
    },
    {
        slug: 'germany',
        name: 'Germany',
        continent: 'Europe',
        cities: [
            { slug: 'berlin', name: 'Berlin' }
        ]
    },
    {
        slug: 'italy',
        name: 'Italy',
        continent: 'Europe',
        cities: [
            { slug: 'rome', name: 'Rome' }
        ]
    },
    {
        slug: 'spain',
        name: 'Spain',
        continent: 'Europe',
        cities: [
            { slug: 'madrid', name: 'Madrid' }
        ]
    },
    {
        slug: 'netherlands',
        name: 'Netherlands',
        continent: 'Europe',
        cities: [
            { slug: 'amsterdam', name: 'Amsterdam' }
        ]
    },
    {
        slug: 'portugal',
        name: 'Portugal',
        continent: 'Europe',
        cities: [
            { slug: 'lisbon', name: 'Lisbon' }
        ]
    },
    {
        slug: 'poland',
        name: 'Poland',
        continent: 'Europe',
        cities: [
            { slug: 'warsaw', name: 'Warsaw' }
        ]
    },
    {
        slug: 'czech-republic',
        name: 'Czech Republic',
        continent: 'Europe',
        cities: [
            { slug: 'prague', name: 'Prague' }
        ]
    },
    {
        slug: 'russia',
        name: 'Russia',
        continent: 'Europe',
        cities: [
            { slug: 'moscow', name: 'Moscow' }
        ]
    },

    // Asia
    {
        slug: 'japan',
        name: 'Japan',
        continent: 'Asia',
        cities: [
            { slug: 'tokyo', name: 'Tokyo' }
        ]
    },
    {
        slug: 'south-korea',
        name: 'South Korea',
        continent: 'Asia',
        cities: [
            { slug: 'seoul', name: 'Seoul' }
        ]
    },
    {
        slug: 'singapore',
        name: 'Singapore',
        continent: 'Asia',
        cities: [
            { slug: 'singapore', name: 'Singapore' }
        ]
    },
    {
        slug: 'hong-kong',
        name: 'Hong Kong',
        continent: 'Asia',
        cities: [
            { slug: 'hong-kong', name: 'Hong Kong' }
        ]
    },
    {
        slug: 'thailand',
        name: 'Thailand',
        continent: 'Asia',
        cities: [
            { slug: 'bangkok', name: 'Bangkok' }
        ]
    },
    {
        slug: 'malaysia',
        name: 'Malaysia',
        continent: 'Asia',
        cities: [
            { slug: 'kuala-lumpur', name: 'Kuala Lumpur' }
        ]
    },
    {
        slug: 'indonesia',
        name: 'Indonesia',
        continent: 'Asia',
        cities: [
            { slug: 'jakarta', name: 'Jakarta' }
        ]
    },
    {
        slug: 'india',
        name: 'India',
        continent: 'Asia',
        cities: [
            { slug: 'mumbai', name: 'Mumbai' },
            { slug: 'new-delhi', name: 'New Delhi' }
        ]
    },

    // Middle East
    {
        slug: 'uae',
        name: 'United Arab Emirates',
        continent: 'Middle East',
        cities: [
            { slug: 'dubai', name: 'Dubai' },
            { slug: 'abu-dhabi', name: 'Abu Dhabi' }
        ]
    },
    {
        slug: 'saudi-arabia',
        name: 'Saudi Arabia',
        continent: 'Middle East',
        cities: [
            { slug: 'riyadh', name: 'Riyadh' }
        ]
    },
    {
        slug: 'qatar',
        name: 'Qatar',
        continent: 'Middle East',
        cities: [
            { slug: 'doha', name: 'Doha' }
        ]
    },
    {
        slug: 'israel',
        name: 'Israel',
        continent: 'Middle East',
        cities: [
            { slug: 'tel-aviv', name: 'Tel Aviv' }
        ]
    },

    // Oceania
    {
        slug: 'australia',
        name: 'Australia',
        continent: 'Oceania',
        cities: [
            { slug: 'sydney', name: 'Sydney' },
            { slug: 'melbourne', name: 'Melbourne' }
        ]
    },
    {
        slug: 'new-zealand',
        name: 'New Zealand',
        continent: 'Oceania',
        cities: [
            { slug: 'auckland', name: 'Auckland' }
        ]
    },

    // South America
    {
        slug: 'argentina',
        name: 'Argentina',
        continent: 'South America',
        cities: [
            { slug: 'buenos-aires', name: 'Buenos Aires' }
        ]
    },
    {
        slug: 'chile',
        name: 'Chile',
        continent: 'South America',
        cities: [
            { slug: 'santiago', name: 'Santiago' }
        ]
    },
    {
        slug: 'colombia',
        name: 'Colombia',
        continent: 'South America',
        cities: [
            { slug: 'bogota', name: 'Bogotá' }
        ]
    },
    {
        slug: 'peru',
        name: 'Peru',
        continent: 'South America',
        cities: [
            { slug: 'lima', name: 'Lima' }
        ]
    },
    {
        slug: 'uruguay',
        name: 'Uruguay',
        continent: 'South America',
        cities: [
            { slug: 'montevideo', name: 'Montevideo' }
        ]
    },

    // Africa
    {
        slug: 'south-africa',
        name: 'South Africa',
        continent: 'Africa',
        cities: [
            { slug: 'cape-town', name: 'Cape Town' },
            { slug: 'johannesburg', name: 'Johannesburg' }
        ]
    },
    {
        slug: 'egypt',
        name: 'Egypt',
        continent: 'Africa',
        cities: [
            { slug: 'cairo', name: 'Cairo' }
        ]
    },
    {
        slug: 'kenya',
        name: 'Kenya',
        continent: 'Africa',
        cities: [
            { slug: 'nairobi', name: 'Nairobi' }
        ]
    },
    {
        slug: 'nigeria',
        name: 'Nigeria',
        continent: 'Africa',
        cities: [
            { slug: 'lagos', name: 'Lagos' }
        ]
    }
];

export function getCityData(countrySlug: string, citySlug: string): { country: RegionCountry, city: RegionCity } | null {
    const country = regionsData.find(c => c.slug === countrySlug);
    if (!country) return null;
    
    const city = country.cities.find(c => c.slug === citySlug);
    if (!city) return null;

    return { country, city };
}
