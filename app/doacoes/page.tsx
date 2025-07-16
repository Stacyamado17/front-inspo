"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Heart, Search, Filter, MapPin, Users, Calendar } from "lucide-react"

export default function DoacoesPage() {
  const [selectedAmount, setSelectedAmount] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  const donationAmounts = ["25", "50", "100", "250", "500"]

  const projects = [
    {
      id: 1,
      title: "Escola Comunitária São José",
      description: "Construção de biblioteca para 300 crianças em comunidade carente",
      category: "Educação",
      location: "São Paulo, SP",
      raised: 45000,
      goal: 60000,
      donors: 234,
      daysLeft: 15,
      image: "/placeholder.svg?height=200&width=300",
      organization: "Instituto Educação Para Todos",
    },
    {
      id: 2,
      title: "Centro de Saúde Comunitário",
      description: "Equipamentos médicos para atendimento básico de saúde",
      category: "Saúde",
      location: "Rio de Janeiro, RJ",
      raised: 32000,
      goal: 40000,
      donors: 156,
      daysLeft: 22,
      image: "/placeholder.svg?height=200&width=300",
      organization: "Saúde Solidária",
    },
    {
      id: 3,
      title: "Reflorestamento Mata Atlântica",
      description: "Plantio de 1000 mudas nativas para recuperação ambiental",
      category: "Meio Ambiente",
      location: "Minas Gerais, MG",
      raised: 28000,
      goal: 35000,
      donors: 189,
      daysLeft: 8,
      image: "/placeholder.svg?height=200&width=300",
      organization: "Verde Futuro",
    },
    {
      id: 4,
      title: "Alimentação para Famílias",
      description: "Cestas básicas para 100 famílias em situação de vulnerabilidade",
      category: "Assistência Social",
      location: "Bahia, BA",
      raised: 18000,
      goal: 25000,
      donors: 98,
      daysLeft: 30,
      image: "/placeholder.svg?height=200&width=300",
      organization: "Mãos Solidárias",
    },
  ]

  const categories = ["Todas", "Educação", "Saúde", "Meio Ambiente", "Assistência Social"]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory =
      selectedCategory === "" || selectedCategory === "Todas" || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.min((raised / goal) * 100, 100)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Faça sua Doação</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Escolha uma causa que toca seu coração e faça a diferença na vida de muitas pessoas
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filtros */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="mr-2 h-5 w-5" />
                  Filtros
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="search">Buscar projetos</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="search"
                      placeholder="Digite aqui..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label>Categoria</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma categoria" />
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
                  <Label>Doação Rápida</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {donationAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedAmount(amount)}
                        className={selectedAmount === amount ? "bg-red-500 hover:bg-red-600" : ""}
                      >
                        R$ {amount}
                      </Button>
                    ))}
                  </div>
                  <div className="mt-2">
                    <Input
                      placeholder="Outro valor"
                      value={selectedAmount}
                      onChange={(e) => setSelectedAmount(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content - Lista de Projetos */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-gray-600">{filteredProjects.length} projeto(s) encontrado(s)</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-2 left-2 bg-red-500">{project.category}</Badge>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                    <div className="flex items-center text-sm text-gray-500 mt-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>R$ {project.raised.toLocaleString()}</span>
                          <span>R$ {project.goal.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-red-500 h-2 rounded-full transition-all"
                            style={{ width: `${getProgressPercentage(project.raised, project.goal)}%` }}
                          ></div>
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          {getProgressPercentage(project.raised, project.goal).toFixed(0)}% da meta alcançada
                        </div>
                      </div>

                      <div className="flex justify-between text-sm text-gray-600">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {project.donors} doadores
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {project.daysLeft} dias restantes
                        </div>
                      </div>

                      <div className="text-sm text-gray-600">
                        <strong>Organização:</strong> {project.organization}
                      </div>

                      <Button className="w-full bg-red-500 hover:bg-red-600">
                        <Heart className="mr-2 h-4 w-4" />
                        Doar para este projeto
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Nenhum projeto encontrado com os filtros selecionados.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Donation Form Modal would go here */}
    </div>
  )
}
