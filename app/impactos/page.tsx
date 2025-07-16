import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Heart, Users, MapPin, School, Stethoscope, Leaf, Home, Award } from "lucide-react"

export default function ImpactosPage() {
  const overallStats = [
    { label: "Total Arrecadado", value: "R$ 2.4M", icon: Heart, color: "text-red-500" },
    { label: "Vidas Impactadas", value: "50.2K", icon: Users, color: "text-blue-500" },
    { label: "Projetos Concluídos", value: "342", icon: Award, color: "text-green-500" },
    { label: "Cidades Atendidas", value: "156", icon: MapPin, color: "text-purple-500" },
  ]

  const categoryImpacts = [
    {
      category: "Educação",
      icon: School,
      color: "bg-blue-500",
      stats: {
        projects: 89,
        beneficiaries: 15420,
        amount: "R$ 680K",
      },
      achievements: ["23 escolas reformadas", "156 bibliotecas criadas", "2.3K crianças alfabetizadas"],
    },
    {
      category: "Saúde",
      icon: Stethoscope,
      color: "bg-red-500",
      stats: {
        projects: 67,
        beneficiaries: 12800,
        amount: "R$ 520K",
      },
      achievements: ["15 postos de saúde equipados", "89 cirurgias realizadas", "1.2K consultas gratuitas"],
    },
    {
      category: "Meio Ambiente",
      icon: Leaf,
      color: "bg-green-500",
      stats: {
        projects: 45,
        beneficiaries: 8900,
        amount: "R$ 340K",
      },
      achievements: ["45K árvores plantadas", "12 parques revitalizados", "890 hectares preservados"],
    },
    {
      category: "Assistência Social",
      icon: Home,
      color: "bg-orange-500",
      stats: {
        projects: 78,
        beneficiaries: 18600,
        amount: "R$ 420K",
      },
      achievements: ["1.8K famílias assistidas", "567 cestas básicas distribuídas", "234 pessoas reintegradas"],
    },
  ]

  const monthlyProgress = [
    { month: "Jan", donations: 85, projects: 12 },
    { month: "Fev", donations: 92, projects: 15 },
    { month: "Mar", donations: 78, projects: 18 },
    { month: "Abr", donations: 95, projects: 22 },
    { month: "Mai", donations: 88, projects: 19 },
    { month: "Jun", donations: 96, projects: 25 },
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Beneficiária - Projeto Educação",
      text: "Graças às doações, minha filha pode estudar em uma escola com biblioteca completa. Isso mudou o futuro da nossa família.",
      location: "São Paulo, SP",
    },
    {
      name: "João Santos",
      role: "Coordenador - Centro de Saúde",
      text: "Com os equipamentos doados, conseguimos atender 300% mais pacientes por mês. O impacto na comunidade é visível.",
      location: "Rio de Janeiro, RJ",
    },
    {
      name: "Ana Costa",
      role: "Voluntária - Reflorestamento",
      text: "Ver a floresta renascendo com as mudas que plantamos é emocionante. Cada árvore representa esperança.",
      location: "Minas Gerais, MG",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nosso Impacto</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Veja como suas doações estão transformando vidas e comunidades em todo o Brasil
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overall Statistics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Estatísticas Gerais</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {overallStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Impact by Category */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Impacto por Categoria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categoryImpacts.map((category, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className={`${category.color} text-white`}>
                  <div className="flex items-center">
                    <category.icon className="h-8 w-8 mr-3" />
                    <div>
                      <CardTitle className="text-xl">{category.category}</CardTitle>
                      <CardDescription className="text-gray-100">
                        {category.stats.projects} projetos concluídos
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{category.stats.projects}</div>
                      <div className="text-sm text-gray-600">Projetos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        {category.stats.beneficiaries.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">Beneficiários</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{category.stats.amount}</div>
                      <div className="text-sm text-gray-600">Arrecadado</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Principais Conquistas:</h4>
                    <ul className="space-y-2">
                      {category.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Monthly Progress */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Progresso Mensal</h2>
          <Card>
            <CardHeader>
              <CardTitle>Evolução de Doações e Projetos</CardTitle>
              <CardDescription>Acompanhe nosso crescimento ao longo dos meses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {monthlyProgress.map((month, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{month.month}</span>
                      <div className="flex space-x-4 text-sm text-gray-600">
                        <span>{month.donations}% doações</span>
                        <span>{month.projects} projetos</span>
                      </div>
                    </div>
                    <Progress value={month.donations} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Histórias de Impacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Heart key={i} className="h-4 w-4 text-red-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  </div>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-500 flex items-center mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
