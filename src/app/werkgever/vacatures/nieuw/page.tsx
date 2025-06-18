'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export default function NewVacancyPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    type: 'FULL_TIME',
    salary: '',
    requirements: '',
    benefits: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementeer de API call om de vacature op te slaan
    router.push('/werkgever/vacatures');
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Terug naar vacatures
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Nieuwe Vacature</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Functietitel</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">Functieomschrijving</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  className="min-h-[200px]"
                />
              </div>

              <div>
                <Label htmlFor="location">Locatie</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="type">Type dienstverband</Label>
                <select
                  id="type"
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  required
                >
                  <option value="FULL_TIME">Volledig</option>
                  <option value="PART_TIME">Deeltijd</option>
                  <option value="TEMPORARY">Tijdelijk</option>
                  <option value="FREELANCE">Freelance</option>
                </select>
              </div>

              <div>
                <Label htmlFor="salary">Salaris</Label>
                <Input
                  id="salary"
                  value={formData.salary}
                  onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                  placeholder="Bijv. €3000 - €4000 per maand"
                />
              </div>

              <div>
                <Label htmlFor="requirements">Eisen</Label>
                <Textarea
                  id="requirements"
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="benefits">Voordelen</Label>
                <Textarea
                  id="benefits"
                  value={formData.benefits}
                  onChange={(e) => setFormData({ ...formData, benefits: e.target.value })}
                  className="min-h-[100px]"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
              >
                Annuleren
              </Button>
              <Button type="submit">
                Vacature plaatsen
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 