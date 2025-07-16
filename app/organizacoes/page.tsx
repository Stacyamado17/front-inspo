"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Building, Search, Users, Heart, MapPin, Calendar, Award, Phone, Mail, ExternalLink, Star } from "lucide-react"

export default function OrganizacoesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedSize, setSelectedSize] = useState("")

  const categories = [
    "Todas as Categorias",
    "Educação",
    "Saúde",
    "Meio Ambiente",
    "Assistência Social",
    "Direitos Humanos",
  ]
  const sizes = ["Todos os Tamanhos", "Pequena (1-50)", "Média (51-200)", "Grande (200+)"]

  const organizations = [
    {
      id: 1,
      name: "Instituto Educação Para Todos",
      category: "Educação",
      size: "Grande",
      description:
        "Organização dedicada a promover educação de qualidade em comunidades carentes, com foco na alfabetização e formação profissional.",
      founded: 2010,
      location: "São Paulo, SP",
      beneficiaries: 15420,
      volunteers: 234,
      projects: 89,
      totalRaised: "R$ 2.4M",
      rating: 4.9,
      logo: "/placeholder.svg?height=80&width=80",
      cover: "/placeholder.svg?height=200&width=400",
      contact: {
        phone: "(11) 3456-7890",
        email: "contato@educacaoparatodos.org.br",
        website: "www.educacaoparatodos.org.br",
      },
      achievements: ["Prêmio Nacional de Educação 2023", "50 escolas construídas", "10.000 crianças alfabetizadas"],
      team: [
        { name: "Maria Silva", role: "Diretora Executiva", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "João Santos", role: "Coordenador de Projetos", avatar: "/placeholder.svg?height=40&width=40" },
      ],
    },
    {
      id: 2,
      name: "Saúde Solidária",
      category: "Saúde",
      size: "Média",
      description:
        "ONG focada em levar atendimento médico gratuito para comunidades rurais e periféricas, com equipes móveis de saúde.",
      founded: 2015,
      location: "Rio de Janeiro, RJ",
      beneficiaries: 8900,
      volunteers: 156,
      projects: 45,
      totalRaised: "R$ 1.2M",
      rating: 4.8,
      logo: "/placeholder.svg?height=80&width=80",
      cover: "/placeholder.svg?height=200&width=400",
      contact: {
        phone: "(21) 2345-6789",
        email: "contato@saudesolidaria.org.br",
        website: "www.saudesolidaria.org.br",
      },
      achievements: ["25 unidades móveis de saúde", "50.000 consultas realizadas", "Certificação ISO 9001"],
      team: [
        { name: "Dr. Carlos Lima", role: "Diretor Médico", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "Ana Costa", role: "Coordenadora de Campo", avatar: "/placeholder.svg?height=40&width=40" },
      ],
    },
    {
      id: 3,
      name: "Verde Futuro",
      category: "Meio Ambiente",
      size: "Pequena",
      description:
        "Organização ambiental que trabalha com reflorestamento, educação ambiental e preservação de nascentes.",
      founded: 2018,
      location: "Minas Gerais, MG",
      beneficiaries: 3200,
      volunteers: 89,
      projects: 23,
      totalRaised: "R$ 450K",
      rating: 4.7,
      logo: "/placeholder.svg?height=80&width=80",
      cover: "/placeholder.svg?height=200&width=400",
      contact: {
        phone: "(31) 3456-7890",
        email: "contato@verdefuturo.org.br",
        website: "www.verdefuturo.org.br",
      },
      achievements: ["100.000 árvores plantadas", "15 nascentes recuperadas", "Prêmio Ambiental 2022"],
      team: [
        { name: "Pedro Oliveira", role: "Biólogo Chefe", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "Lucia Ferreira", role: "Educadora Ambiental", avatar: "/placeholder.svg?height=40&width=40" },
      ],
    },
    {
      id: 4,
      name: "Mãos Solidárias",
      category: "Assistência Social",
      size: "Média",
      description:
        "Organização que atua no combate à fome e na assistência a famílias em situação de vulnerabilidade social.",
      founded: 2012,
      location: "Bahia, BA",
      beneficiaries: 12500,
      volunteers: 178,
      projects: 67,
      totalRaised: "R$ 890K",
      rating: 4.6,
      logo: "/placeholder.svg?height=80&width=80",
      cover: "/placeholder.svg?height=200&width=400",
      contact: {
        phone: "(71) 3456-7890",
        email: "contato@maossolidarias.org.br",
        website: "www.maossolidarias.org.br",
      },
      achievements: ["500.000 refeições distribuídas", "1.200 famílias assistidas", "Parceria com 50 empresas"],
      team: [
        { name: "Rosa Santos", role: "Assistente Social", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "Roberto Silva", role: "Coordenador de Logística", avatar: "/placeholder.svg?height=40&width=40" },
      ],
    },
    {
      id: 5,
      name: "Direitos e Cidadania",
      category: "Direitos Humanos",
      size: "Pequena",
      description:
        "ONG que trabalha na defesa dos direitos humanos, oferecendo assistência jurídica gratuita e educação em direitos.",
      founded: 2016,
      location: "Brasília, DF",
      beneficiaries: 2800,
      volunteers: 67,
      projects: 34,
      totalRaised: "R$ 320K",
      rating: 4.8,
      logo: "/placeholder.svg?height=80&width=80",
      cover: "/placeholder.svg?height=200&width=400",
      contact: {
        phone: "(61) 3456-7890",
        email: "contato@direitosecidadania.org.br",
        website: "www.direitosecidadania.org.br",
      },
      achievements: ["1.500 casos jurídicos atendidos", "200 workshops realizados", "Parceria com OAB"],
      team: [
        { name: "Dra. Fernanda Rocha", role: "Advogada Coordenadora", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "Marcos Pereira", role: "Educador Social", avatar: "/placeholder.svg?height=40&width=40" },
      ],
    },
  ]

  const filteredOrganizations = organizations.filter((org) => {
    const matchesSearch =
      org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      org.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      org.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory =
      selectedCategory === "" || selectedCategory === "Todas as Categorias" || org.category === selectedCategory
    const matchesSize =
      selectedSize === "" || selectedSize === "Todos os Tamanhos" || org.size === selectedSize.split(" ")[0]
    return matchesSearch && matchesCategory && matchesSize
  })

  const getCategoryColor = (category: string) => {
    const colors = {
      Educação: "bg-blue-500",
      Saúde: "bg-red-500",
      "Meio Ambiente": "bg-green-500",
      "Assistência Social": "bg-orange-500",
      "Direitos Humanos": "bg-purple-500",
    }
    return colors[category as keyof typeof colors] || "bg-gray-500"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Organizações Parceiras</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Conheça as organizações que fazem a diferença e escolha como apoiar suas causas
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="mr-2 h-5 w-5" />
              Buscar Organizações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Input
                  placeholder="Buscar por nome ou descrição..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tamanho da organização" />
                  </SelectTrigger>
                  <SelectContent>
                    {sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">{filteredOrganizations.length} organização(ões) encontrada(s)</p>
        </div>

        {/* Organizations Grid */}
        <div className="space-y-8">
          {filteredOrganizations.map((org) => (
            <Card key={org.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={org.cover || "/placeholder.svg"} alt={org.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-4">
                  <Avatar className="h-16 w-16 border-4 border-white">
                    <AvatarImage src={org.logo || "/placeholder.svg"} alt={org.name} />
                    <AvatarFallback className="text-lg font-bold">
                      {org.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-white">
                    <h2 className="text-2xl font-bold">{org.name}</h2>
                    <div className="flex items-center space-x-2">
                      <Badge className={`${getCategoryColor(org.category)} text-white`}>{org.category}</Badge>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm">{org.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Main Info */}
                  <div className="lg:col-span-2 space-y-4">
                    <p className="text-gray-600">{org.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{org.beneficiaries.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Beneficiários</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{org.volunteers}</div>
                        <div className="text-sm text-gray-600">Voluntários</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{org.projects}</div>
                        <div className="text-sm text-gray-600">Projetos</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{org.totalRaised}</div>
                        <div className="text-sm text-gray-600">Arrecadado</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Principais Conquistas:</h4>
                      <ul className="space-y-1">
                        {org.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <Award className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Equipe:</h4>
                      <div className="flex space-x-4">
                        {org.team.map((member, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                              <AvatarFallback className="text-xs">
                                {member.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="text-sm font-medium">{member.name}</div>
                              <div className="text-xs text-gray-600">{member.role}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sidebar Info */}
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Informações</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          Fundada em {org.founded}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          {org.location}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Building className="h-4 w-4 mr-2" />
                          Organização {org.size}
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Contato</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-gray-600">
                          <Phone className="h-4 w-4 mr-2" />
                          {org.contact.phone}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Mail className="h-4 w-4 mr-2" />
                          {org.contact.email}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {org.contact.website}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button className="w-full bg-red-500 hover:bg-red-600">
                        <Heart className="mr-2 h-4 w-4" />
                        Fazer Doação
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        <Users className="mr-2 h-4 w-4" />
                        Ser Voluntário
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        Ver Projetos
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredOrganizations.length === 0 && (
          <div className="text-center py-12">
            <Building className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Nenhuma organização encontrada com os filtros selecionados.</p>
          </div>
        )}
      </div>
    </div>
  )
}
