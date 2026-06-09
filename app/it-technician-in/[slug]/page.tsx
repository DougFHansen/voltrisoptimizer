import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocalTecnicoClient from '../LocalTecnicoClient';

interface LocationData {
    slug: string;
    name: string;
    state: string;
    stateAbbr: string;
    neighborhoods: string[];
    description: string;
}

const locations: Record<string, LocationData> = {
    'sao-paulo': {
        slug: 'sao-paulo',
        name: 'São Paulo',
        state: 'São Paulo',
        stateAbbr: 'SP',
        neighborhoods: ['Paulista', 'Itaim Bibi', 'Moema', 'Tatuapé', 'Pinheiros', 'Morumbi', 'Santana', 'Mooca', 'Barra Funda', 'Vila Madalena', 'Ibirapuera', 'Bela Vista'],
        description: 'IT technical support in São Paulo. Computer maintenance, gaming PC optimization, and remote assistance in the capital of São Paulo.'
    },
    'rio-de-janeiro': {
        slug: 'rio-de-janeiro',
        name: 'Rio de Janeiro',
        state: 'Rio de Janeiro',
        stateAbbr: 'RJ',
        neighborhoods: ['Barra da Tijuca', 'Copacabana', 'Tijuca', 'Recreio', 'Ipanema', 'Botafogo', 'Leblon', 'Flamengo', 'Centro', 'Jacarepaguá', 'Méier', 'Niterói'],
        description: 'IT technician in Rio de Janeiro. Computer repair, Windows support, and gaming optimization throughout the Carioca region.'
    },
    'belo-horizonte': {
        slug: 'belo-horizonte',
        name: 'Belo Horizonte',
        state: 'Minas Gerais',
        stateAbbr: 'MG',
        neighborhoods: ['Savassi', 'Lourdes', 'Pampulha', 'Buritis', 'Sion', 'Funcionários', 'Castelo', 'Santa Efigênia', 'Horto', 'Betim', 'Contagem', 'Nova Lima'],
        description: 'IT technical assistance in Belo Horizonte and MG. Fast remote support for businesses and gamers throughout Greater BH.'
    },
    'curitiba': {
        slug: 'curitiba',
        name: 'Curitiba',
        state: 'Paraná',
        stateAbbr: 'PR',
        neighborhoods: ['Batel', 'Centro Cívico', 'Água Verde', 'Bigorrilho', 'Santa Felicidade', 'Pinheirinho', 'Portão', 'Jardim Botânico', 'Cidade Industrial', 'Londrina', 'Maringá', 'Cascavel'],
        description: 'IT technician in Curitiba and Paraná. Specialist in PC performance, remote technical support, and systems maintenance in PR.'
    },
    'porto-alegre': {
        slug: 'porto-alegre',
        name: 'Porto Alegre',
        state: 'Rio Grande do Sul',
        stateAbbr: 'RS',
        neighborhoods: ['Moinhos de Vento', 'Petrópolis', 'Bela Vista', 'Menino Deus', 'Cidade Baixa', 'Ipanema', 'Canoas', 'Caxias do Sul', 'Pelotas', 'Passo Fundo', 'Novo Hamburgo', 'Gravataí'],
        description: 'IT technical support in Rio Grande do Sul. Specialized service in Porto Alegre and Gaucho cities via remote access.'
    },
    'salvador': {
        slug: 'salvador',
        name: 'Salvador',
        state: 'Bahia',
        stateAbbr: 'BA',
        neighborhoods: ['Barra', 'Caminho das Árvores', 'Itaigara', 'Pituba', 'Rio Vermelho', 'Graça', 'Feira de Santana', 'Vitória da Conquista', 'Camaçari', 'Lauro de Freitas', 'Itabuna', 'Ilhéus'],
        description: 'IT technician in Salvador and Bahia. PC repair, Windows optimization, and remote technical assistance throughout the state of Bahia.'
    },
    'brasilia': {
        slug: 'brasilia',
        name: 'Brasília',
        state: 'Distrito Federal',
        stateAbbr: 'DF',
        neighborhoods: ['Asa Sul', 'Asa Norte', 'Lago Sul', 'Lago Norte', 'Sudoeste', 'Águas Claras', 'Taguatinga', 'Ceilândia', 'Guará', 'Sobradinho', 'Samambaia', 'Gama'],
        description: 'IT technical assistance in Brasília and DF. Remote support for agencies and professionals in the federal capital with maximum security.'
    },
    'fortaleza': {
        slug: 'fortaleza',
        name: 'Fortaleza',
        state: 'Ceará',
        stateAbbr: 'CE',
        neighborhoods: ['Aldeota', 'Meireles', 'Cocó', 'Papicu', 'Dionísio Torres', 'Fátima', 'Caucaia', 'Maracanaú', 'Sobral', 'Juazeiro do Norte', 'Itapipoca', 'Maranguape'],
        description: 'IT technical support in Ceará. Specialist in Fortaleza for remote maintenance of computers and notebooks.'
    },
    'recife': {
        slug: 'recife',
        name: 'Recife',
        state: 'Pernambuco',
        stateAbbr: 'PE',
        neighborhoods: ['Boa Viagem', 'Graças', 'Espinheiro', 'Casa Forte', 'Pina', 'Imbiribeira', 'Olinda', 'Jaboatão dos Guararapes', 'Caruaru', 'Petrolina', 'Paulista', 'Cabo de Santo Agostinho'],
        description: 'IT technician in Recife and Pernambuco. 24/7 remote assistance for network, virus, and PC performance issues.'
    },
    'goiania': {
        slug: 'goiania',
        name: 'Goiânia',
        state: 'Goiás',
        stateAbbr: 'GO',
        neighborhoods: ['Setor Bueno', 'Setor Marista', 'Setor Oeste', 'Jardim Goiás', 'Alphaville', 'Parque Amazônia', 'Aparecida de Goiânia', 'Anápolis', 'Rio Verde', 'Luziânia', 'Águas Lindas', 'Trindade'],
        description: 'IT technical assistance in Goiás. Remote service in Goiânia and Goian cities with a focus on performance and security.'
    },
    'florianopolis': {
        slug: 'florianopolis',
        name: 'Florianópolis',
        state: 'Santa Catarina',
        stateAbbr: 'SC',
        neighborhoods: ['Centro', 'Trindade', 'Jurerê', 'Campeche', 'Itacorubi', 'Coqueiros', 'Joinvile', 'Blumenau', 'São José', 'Chapecó', 'Itajaí', 'Criciúma'],
        description: 'IT technical support in Santa Catarina. Remote technician in Florianópolis and major Catarinense technological hubs.'
    },
    'manaus': {
        slug: 'manaus',
        name: 'Manaus',
        state: 'Amazonas',
        stateAbbr: 'AM',
        neighborhoods: ['Adrianópolis', 'Ponta Negra', 'Vieiralves', 'Aleixo', 'Dom Pedro', 'Tarumã', 'Distrito Industrial', 'Parque 10', 'Constantino Nery', 'Flores'],
        description: 'IT technician in Manaus and Amazonas. Fast remote support for the northern region with a focus on maintenance and optimization.'
    },
    'belem': {
        slug: 'belem',
        name: 'Belém',
        state: 'Pará',
        stateAbbr: 'PA',
        neighborhoods: ['Umarizal', 'Nazaré', 'Batista Campos', 'Reduto', 'Marco', 'Cidade Velha', 'São Brás', 'Pedreira', 'Telégrafo', 'Jurunas'],
        description: 'IT technical assistance in Belém and Pará. Solve slowness and errors via safe remote support.'
    },
    'vitoria': {
        slug: 'vitoria',
        name: 'Vitória',
        state: 'Espírito Santo',
        stateAbbr: 'ES',
        neighborhoods: ['Praia do Canto', 'Jardim Camburi', 'Jardim da Penha', 'Enseada do Suá', 'Mata da Praia', 'Bento Ferreira', 'Vila Velha', 'Serra', 'Cariacica'],
        description: 'IT technician in Vitória and ES. Specialized technical support for Capixaba professionals and businesses.'
    },
    'campo-grande': {
        slug: 'campo-grande',
        name: 'Campo Grande',
        state: 'Mato Grosso do Sul',
        stateAbbr: 'MS',
        neighborhoods: ['Centro', 'Santa Fé', 'Carandá Bosque', 'Jardim dos Estados', 'Chácara Cachoeira', 'Tiradentes', 'Vilacity', 'Monte Castelo'],
        description: 'IT technical support in Mato Grosso do Sul. Specialized service in Campo Grande via remote access.'
    },
    'cuiaba': {
        slug: 'cuiaba',
        name: 'Cuiabá',
        state: 'Mato Grosso',
        stateAbbr: 'MT',
        neighborhoods: ['Goiabeiras', 'Bosque da Saúde', 'Santa Rosa', 'Duque de Caxias', 'Jardim das Américas', 'Centro Sul', 'Várzea Grande'],
        description: 'IT technician in Cuiabá and MT. Gaming PC optimization and remote technical assistance throughout Mato Grosso.'
    },
    'sao-luis': {
        slug: 'sao-luis',
        name: 'São Luís',
        state: 'Maranhão',
        stateAbbr: 'MA',
        neighborhoods: ['Ponta d\'Areia', 'Renascença', 'Calhau', 'Cohama', 'Turu', 'Olho d\'Água', 'Centro', 'Anjo da Guarda'],
        description: 'IT technical assistance in Maranhão. Remote technician in São Luís for maintenance of computers and notebooks.'
    },
    'natal': {
        slug: 'natal',
        name: 'Natal',
        state: 'Rio Grande do Norte',
        stateAbbr: 'RN',
        neighborhoods: ['Tirol', 'Petrópolis', 'Ponta Negra', 'Capim Macio', 'Lagoa Nova', 'Candelária', 'Parnamirim', 'Mossoró'],
        description: 'IT technical support in RN. Remote service in Natal and Potiguar with a focus on performance and security.'
    },
    'joao-pessoa': {
        slug: 'joao-pessoa',
        name: 'João Pessoa',
        state: 'Paraíba',
        stateAbbr: 'PB',
        neighborhoods: ['Manaíra', 'Tambaú', 'Cabo Branco', 'Altiplano', 'Bessa', 'Intermares', 'Campina Grande', 'Cabedelo'],
        description: 'IT technician in Paraíba. Remote assistance in João Pessoa for network, virus, and PC performance problems.'
    },
    'maceio': {
        slug: 'maceio',
        name: 'Maceió',
        state: 'Alagoas',
        stateAbbr: 'AL',
        neighborhoods: ['Ponta Verde', 'Jatiúca', 'Pajuçara', 'Farol', 'Arapiraca', 'Rio Largo', 'Palmeira dos Índios', 'Marechal Deodoro'],
        description: 'IT technical support in Alagoas. Remote technician in Maceió with a focus on immediate maintenance and optimization.'
    },
    'teresina': {
        slug: 'teresina',
        name: 'Teresina',
        state: 'Piauí',
        stateAbbr: 'PI',
        neighborhoods: ['Jóquei', 'Fátima', 'São Cristóvão', 'Horto', 'Ilhotas', 'Centro', 'Parnaíba', 'Picos'],
        description: 'IT technical assistance in Piauí. Specialist in Teresina for remote computer maintenance.'
    },
    'aracaju': {
        slug: 'aracaju',
        name: 'Aracaju',
        state: 'Sergipe',
        stateAbbr: 'SE',
        neighborhoods: ['Treze de Julho', 'Jardins', 'Atalaia', 'Grageru', 'Farolândia', 'Centro', 'Nossa Senhora do Socorro', 'Lagarto'],
        description: 'IT technician in Sergipe. Remote support in Aracaju to solve errors and optimize performance.'
    },
    'palmas': {
        slug: 'palmas',
        name: 'Palmas',
        state: 'Tocantins',
        stateAbbr: 'TO',
        neighborhoods: ['Plano Diretor Sul', 'Plano Diretor Norte', 'Taquaralto', 'Araguaína', 'Gurupi', 'Porto Nacional'],
        description: 'IT technical support in Tocantins. Remote service in Palmas for businesses and home users.'
    },
    'rio-branco': {
        slug: 'rio-branco',
        name: 'Rio Branco',
        state: 'Acre',
        stateAbbr: 'AC',
        neighborhoods: ['Bosque', 'Ivana', 'Jardim Eulália', 'Cerâmica', 'Cruzeiro do Sul', 'Sena Madureira'],
        description: 'IT technical assistance in Acre. Remote support in Rio Branco for hardware and software maintenance.'
    },
    'porto-velho': {
        slug: 'porto-velho',
        name: 'Porto Velho',
        state: 'Rondônia',
        stateAbbr: 'RO',
        neighborhoods: ['Olaria', 'São João Bosco', 'Nossa Senhora das Graças', 'Ji-Paraná', 'Ariquemes', 'Vilhena'],
        description: 'IT technician in Rondônia. Fast remote support in Porto Velho for system optimization and performance.'
    },
    'boa-vista': {
        slug: 'boa-vista',
        name: 'Boa Vista',
        state: 'Roraima',
        stateAbbr: 'RR',
        neighborhoods: ['Caçari', 'Paraviana', 'São Francisco', 'Canarinho', 'Caracaraí', 'Rorainópolis'],
        description: 'IT technical support in Roraima. Remote service in Boa Vista to solve bugs and errors.'
    },
    'macapa': {
        slug: 'macapa',
        name: 'Macapá',
        state: 'Amapá',
        stateAbbr: 'AP',
        neighborhoods: ['Central', 'Santa Rita', 'Laguinho', 'Trem', 'Santana', 'Laranjal do Jari'],
        description: 'IT technical assistance in Amapá. Remote support in Macapá focused on computer security and performance.'
    }
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const location = locations[params.slug];

    if (!location) return { title: 'IT Technician' };

    return {
        title: `IT Technician in ${location.name} - Remote Support and Maintenance | VOLTRIS`,
        description: `${location.description} 24/7 service, 100% secure and no travel required. Solve slowness and errors right now.`,
        keywords: [
            `it technician in ${location.name}`,
            `computer maintenance ${location.name}`,
            `pc repair ${location.name}`,
            `technical support ${location.name}`,
            `gaming pc optimization ${location.name}`,
            `format pc ${location.name}`,
            `it technical assistance ${location.name}`,
            `pc technician in ${location.name}`,
            `windows support ${location.name}`,
            `virus removal ${location.name}`
        ],
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/it-technician-in/${location.slug}`
        },
        openGraph: {
            title: `IT Technician in ${location.name} | VOLTRIS`,
            description: location.description,
            url: `https://www.voltrisoptimizer.com/it-technician-in/${location.slug}`,
            type: 'website',
            images: [{ url: '/remotebanner.jpg', width: 1200, height: 630 }]
        }
    };
}

export async function generateStaticParams() {
    return Object.keys(locations).map((slug) => ({
        slug,
    }));
}

export default function LocalPage({ params }: { params: { slug: string } }) {
    const location = locations[params.slug];

    if (!location) {
        notFound();
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": `VOLTRIS - IT Technician in ${location.name}`,
                        "description": location.description,
                        "url": `https://www.voltrisoptimizer.com/it-technician-in/${location.slug}`,
                        "telephone": "+5511996716235",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": location.name,
                            "addressRegion": location.stateAbbr,
                            "addressCountry": "BR"
                        },
                        "geo": {
                            "@type": "GeoCircle",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Remote IT Technical Support"
                            }
                        },
                        "areaServed": location.name,
                        "openingHours": "Mo-Su 00:00-23:59"
                    })
                }}
            />
            <LocalTecnicoClient
                locationName={location.name}
                stateAbbr={location.stateAbbr}
                regionalContext={{
                    neighborhoods: location.neighborhoods,
                    localFact: `We serve the entire region of ${location.name} with elite security protocols.`
                }}
            />
        </>
    );
}
