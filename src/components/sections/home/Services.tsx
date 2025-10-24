'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code2, Smartphone, Cloud, Palette, BarChart3, Shield, ArrowRight } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_SERVICES_CARD_GRID = {
  badge: 'Our Services',
  mainTitle: 'Strategic Solutions',
  mainTitleHighlight: 'That Transform',
  mainDescription:
    'Comprehensive consulting services designed to accelerate your business growth and operational excellence',
  service1Title: 'Strategic Planning',
  service1Description:
    'Develop comprehensive business strategies that align with your vision and drive sustainable growth.',
  service1Badge: 'Core Service',
  service1LearnMore: 'Learn More',
  service1Link: '/services/strategic-planning',
  service2Title: 'Digital Transformation',
  service2Description:
    'Navigate digital disruption with technology solutions that modernize your operations.',
  service2LearnMore: 'Learn More',
  service2Link: '/services/digital-transformation',
  service3Title: 'Change Management',
  service3Description:
    'Guide your organization through transitions with proven methodologies and expert support.',
  service3Badge: 'Popular',
  service3LearnMore: 'Learn More',
  service3Link: '/services/change-management',
  service4Title: 'Process Optimization',
  service4Description:
    'Streamline operations and eliminate inefficiencies to maximize productivity and profitability.',
  service4LearnMore: 'Learn More',
  service4Link: '/services/process-optimization',
  service5Title: 'Financial Advisory',
  service5Description:
    'Expert financial guidance for mergers, acquisitions, restructuring, and capital planning.',
  service5LearnMore: 'Learn More',
  service5Link: '/services/financial-advisory',
  service6Title: 'Risk Management',
  service6Description:
    "Identify, assess, and mitigate business risks to protect your organization's future.",
  service6LearnMore: 'Learn More',
  service6Link: '/services/risk-management',
  bottomQuestion: 'Need a customized solution for your business?',
  primaryCTA: 'Schedule Consultation',
  primaryCTAHref: '/contact',
  secondaryCTA: 'View All Services',
  secondaryCTAHref: '/services',
} as const;

type ServicesCardGridProps = Partial<typeof DEFAULT_SERVICES_CARD_GRID>;

export default function Services(props: ServicesCardGridProps) {
  const config = { ...DEFAULT_SERVICES_CARD_GRID, ...props };
  const navigate = useSmartNavigation();

  const services = [
    {
      id: 'strategic-planning',
      title: config.service1Title,
      description: config.service1Description,
      icon: Code2,
      badge: config.service1Badge,
      features: ['Market Analysis', 'Growth Strategy', 'KPI Framework'],
      learnMore: config.service1LearnMore,
      link: config.service1Link,
    },
    {
      id: 'digital-transformation',
      title: config.service2Title,
      description: config.service2Description,
      icon: Smartphone,
      badge: null,
      features: ['Technology Roadmap', 'System Integration', 'Digital Culture'],
      learnMore: config.service2LearnMore,
      link: config.service2Link,
    },
    {
      id: 'change-management',
      title: config.service3Title,
      description: config.service3Description,
      icon: Cloud,
      badge: config.service3Badge,
      features: ['Stakeholder Engagement', 'Training Programs', 'Communication Strategy'],
      learnMore: config.service3LearnMore,
      link: config.service3Link,
    },
    {
      id: 'process-optimization',
      title: config.service4Title,
      description: config.service4Description,
      icon: Palette,
      badge: null,
      features: ['Workflow Analysis', 'Automation', 'Performance Metrics'],
      learnMore: config.service4LearnMore,
      link: config.service4Link,
    },
    {
      id: 'financial-advisory',
      title: config.service5Title,
      description: config.service5Description,
      icon: BarChart3,
      badge: null,
      features: ['M&A Support', 'Due Diligence', 'Valuation Services'],
      learnMore: config.service5LearnMore,
      link: config.service5Link,
    },
    {
      id: 'risk-management',
      title: config.service6Title,
      description: config.service6Description,
      icon: Shield,
      badge: null,
      features: ['Risk Assessment', 'Compliance', 'Crisis Planning'],
      learnMore: config.service6LearnMore,
      link: config.service6Link,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <span data-editable="badge">{config.badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="mainTitle">{config.mainTitle}</span>
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              <span data-editable="mainTitleHighlight">{config.mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span data-editable="mainDescription">{config.mainDescription}</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.id}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="text-xs">
                        <span data-editable={`service${index + 1}Badge`}>{service.badge}</span>
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    <span data-editable={`service${index + 1}Title`}>{service.title}</span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    <span data-editable={`service${index + 1}Description`}>
                      {service.description}
                    </span>
                  </CardDescription>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="size-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <Button
                    variant="ghost"
                    className="w-full group/btn justify-between hover:bg-primary/10"
                    onClick={() => navigate(service.link)}
                    data-editable-href={`service${index + 1}Link`}
                    data-href={service.link}
                  >
                    <span data-editable={`service${index + 1}LearnMore`}>{service.learnMore}</span>
                    <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            <span data-editable="bottomQuestion">{config.bottomQuestion}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate(config.primaryCTAHref)}
              data-editable-href="primaryCTAHref"
              data-href={config.primaryCTAHref}
            >
              <span data-editable="primaryCTA">{config.primaryCTA}</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate(config.secondaryCTAHref)}
              data-editable-href="secondaryCTAHref"
              data-href={config.secondaryCTAHref}
            >
              <span data-editable="secondaryCTA">{config.secondaryCTA}</span>
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
