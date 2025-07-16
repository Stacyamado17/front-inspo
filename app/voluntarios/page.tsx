"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, Heart, Clock, MapPin, Calendar, Star, CheckCircle } from "lucide-react"

export default function VoluntariosPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    skills: [] as string[],
    availability: "",
    experience: "",
    motivation: "",
  })

  const opportunities = [
    {
      id: 1,
      title: "Professor de Reforço Escolar",
      organization: "Instituto Educação Para Todos",
      category: "Educação",
      location: "São Paulo, SP",
      duration: "3 meses",
      commitment: "4 horas/semana",
      description: "Ajudar crianças de 8 a 12 anos com dificuldades em matemática e português.",
      requirements: ["Ensino médio completo", "Paciência com crianças", "Disponibilidade vespertina"],
      benefits: ["Certificado de voluntariado", "Transporte fornecido", "Lanche incluído"],
      volunteers: 12,
      maxVolunteers: 15,
      image: "/placeholder.svg?height=200&width=300",
      urgent: true,
    },
    {
      id: 2,
      title: "Assistente de Enfermagem",
      organization: "Saúde Solidária",
      category: "Saúde",
      location: "Rio de Janeiro, RJ",
      duration: "6 meses",
      commitment: "8 horas/semana",
      description: "Apoiar equipe médica em atendimentos básicos em comunidades carentes.",
      requirements: ["Curso técnico em enfermagem", "Experiência mínima de 1 ano", "Disponibilidade fins de semana"],
      benefits: ["Experiência profissional", "Networking", "Certificado"],
      volunteers: 8,
      maxVolunteers: 10,
      image: "/placeholder.svg?height=200&width=300",
      urgent: false,
    },
    {
      id: 3,
      title: "Educador Ambiental",
      organization: "Verde Futuro",
      category: "Meio Ambiente",
      location: "Belo Horizonte, MG",
      duration: "4 meses",
      commitment: "6 horas/semana",
      description: "Conduzir workshops sobre sustentabilidade e plantio de mudas.",
      requirements: ["Conhecimento em meio ambiente", "Habilidade de comunicação", "Disponibilidade manhãs"],
      benefits: ["Contato com natureza", "Aprendizado prático", "Certificado"],
      volunteers: 5,
      maxVolunteers: 8,
      image: "/placeholder.svg?height=200&width=300",
      urgent: false,
    },
    {
      id: 4,
      title: "Distribuidor de Alimentos",
      organization: "Mãos Solidárias",
      category: "Assistência Social",
      location: "Salvador, BA",
      duration: "2 meses",
      commitment: "3 horas/semana",
      description: "Ajudar na organização e distribuição de cestas básicas para famílias necessitadas.",
      requirements: ["Disponibilidade sábados", "Disposição física", "Empatia"],
      benefits: ["Impacto social direto", "Trabalho em equipe", "Flexibilidade"],
      volunteers: 20,
      maxVolunteers: 25,
      image: "/placeholder.svg?height=200&width=300",
      urgent: true,
    },
  ]

  const testimonials = [
    {
      name: "Ana Silva",
      role: "Voluntária há 2 anos",
      text: "Ser voluntária mudou minha perspectiva de vida. Ver o sorriso das crianças que ajudo não tem preço.",
      avatar: "/placeholder.svg?height=60&width=60",
      organization: "Instituto Educação Para Todos",
    },
    {
      name: "Carlos Santos",
      role: "Voluntário há 1 ano",
      text: "O trabalho voluntário me deu experiência profissional e amizades que levarei para a vida toda.",
      avatar: "/placeholder.svg?height=60&width=60",
      organization: "Saúde Solidária",
    },
    {
      name: "Mariana Costa",
      role: "Voluntária há 6 meses",
      text: "Contribuir para a preservação do meio ambiente me faz sentir que estou fazendo a diferença no mundo.",
      avatar: "/placeholder.svg?height=60&width=60",
      organization: "Verde Futuro",
    },
  ]

  const skills = [
    "Ensino/Educação",
    "Saúde/Medicina",
    "Tecnologia",
    "Marketing",
    "Administração",
    "Psicologia",
    "Direito",
    "Engenharia",
    "Arte/Design",
    "Comunicação",
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      Educação: "bg-blue-500",
      Saúde: "bg-red-500",
      "Meio Ambiente": "bg-green-500",
      "Assistência Social": "bg-orange-500",
    }
    return colors[category as keyof typeof colors] || "bg-gray-500"
  }

  const handleSkillChange = (skill: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({ ...prev, skills: [...prev.skills, skill] }))
    } else {
      setFormData((prev) => ({ ...prev, skills: prev.skills.filter((s) => s !== skill) }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Aqui seria feita a integração com a API
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-500 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Seja um Voluntário</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Transforme vidas e faça a diferença na sua comunidade. Encontre oportunidades de voluntariado que combinam
              com você.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Registration Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Cadastre-se como Voluntário
                </CardTitle>
                <CardDescription>Preencha seus dados para encontrar oportunidades ideais para você</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="city">Cidade</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">Estado</Label>
                      <Select
                        value={formData.state}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, state: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="UF" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="SP">SP</SelectItem>
                          <SelectItem value="RJ">RJ</SelectItem>
                          <SelectItem value="MG">MG</SelectItem>
                          <SelectItem value="BA">BA</SelectItem>
                          <SelectItem value="PR">PR</SelectItem>
                          <SelectItem value="RS">RS</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label>Habilidades/Áreas de Interesse</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {skills.map((skill) => (
                        <div key={skill} className="flex items-center space-x-2">
                          <Checkbox
                            id={skill}
                            checked={formData.skills.includes(skill)}
                            onCheckedChange={(checked) => handleSkillChange(skill, checked as boolean)}
                          />
                          <Label htmlFor={skill} className="text-sm">
                            {skill}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="availability">Disponibilidade</Label>
                    <Select
                      value={formData.availability}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, availability: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione sua disponibilidade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekdays">Dias de semana</SelectItem>
                        <SelectItem value="weekends">Fins de semana</SelectItem>
                        <SelectItem value="flexible">Flexível</SelectItem>
                        <SelectItem value="evenings">Noites</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="experience">Experiência Anterior</Label>
                    <Textarea
                      id="experience"
                      placeholder="Descreva sua experiência com trabalho voluntário (opcional)"
                      value={formData.experience}
                      onChange={(e) => setFormData((prev) => ({ ...prev, experience: e.target.value }))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="motivation">Motivação</Label>
                    <Textarea
                      id="motivation"
                      placeholder="Por que você quer ser voluntário?"
                      value={formData.motivation}
                      onChange={(e) => setFormData((prev) => ({ ...prev, motivation: e.target.value }))}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
                    <Heart className="mr-2 h-4 w-4" />
                    Cadastrar como Voluntário
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Opportunities List */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Oportunidades de Voluntariado</h2>
              <p className="text-gray-600 mb-6">
                Encontre a oportunidade perfeita para contribuir com causas que você acredita
              </p>
            </div>

            <div className="space-y-6">
              {opportunities.map((opportunity) => (
                <Card key={opportunity.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    <div className="relative h-48 md:h-auto">
                      <Image
                        src={opportunity.image || "/placeholder.svg"}
                        alt={opportunity.title}
                        fill
                        className="object-cover"
                      />
                      {opportunity.urgent && (
                        <Badge className="absolute top-2 left-2 bg-red-500 text-white">Urgente</Badge>
                      )}
                      <Badge className={`absolute top-2 right-2 ${getCategoryColor(opportunity.category)} text-white`}>
                        {opportunity.category}
                      </Badge>
                    </div>

                    <div className="md:col-span-2 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{opportunity.title}</h3>
                          <p className="text-gray-600 mb-2">{opportunity.organization}</p>
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <MapPin className="h-4 w-4 mr-1" />
                            {opportunity.location}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">
                            {opportunity.volunteers}/{opportunity.maxVolunteers} voluntários
                          </div>
                          <div className="w-20 bg-gray-200 rounded-full h-2 mt-1">
                            <div
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${(opportunity.volunteers / opportunity.maxVolunteers) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{opportunity.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          Duração: {opportunity.duration}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          {opportunity.commitment}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Requisitos:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {opportunity.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Benefícios:</h4>
                        <div className="flex flex-wrap gap-2">
                          {opportunity.benefits.map((benefit, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button className="bg-green-500 hover:bg-green-600">
                          <Heart className="mr-2 h-4 w-4" />
                          Candidatar-se
                        </Button>
                        <Button variant="outline">Mais Informações</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Histórias de Voluntários</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  </div>
                  <div className="text-sm text-gray-500">{testimonial.organization}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-green-500 text-white py-12 px-8 rounded-lg mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para fazer a diferença?</h2>
          <p className="text-xl text-green-100 mb-6 max-w-2xl mx-auto">
            Junte-se a milhares de voluntários que já estão transformando vidas em todo o Brasil.
          </p>
          <Button size="lg" className="bg-white text-green-500 hover:bg-gray-100">
            <Users className="mr-2 h-5 w-5" />
            Começar Agora
          </Button>
        </section>
      </div>
    </div>
  )
}
