import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';

export const Route = createFileRoute('/demander-un-devis')({
  component: QuoteRequest,
})



 function QuoteRequest() {
  const [formData, setFormData] = useState({
    nom: '',
    entreprise: '',
    email: '',
    telephone: '',
    emplacement: '',
    type_projet: '',
    puissance: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitez la soumission ici (ex: API call)
    console.log('Données du devis soumises :', formData);
  };

  return (
    <div className="bg-background pt-20 text-on-background font-body-md text-body-md antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col dark:bg-gray-950 dark:text-gray-200">
      {/* Main Content Canvas */}
      <main className="w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-md items-start">
          
          {/* Hero / Context Area */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <h1 className="font-headline-xl text-headline-xl text-primary mb-4 md:font-headline-lg-mobile md:text-headline-lg-mobile lg:font-headline-xl lg:text-headline-xl dark:text-white">
                Demander un Devis
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-gray-400">
                Obtenez une évaluation précise pour votre infrastructure énergétique. Nos ingénieurs analyseront vos besoins pour concevoir une solution solaire robuste et pérenne, adaptée aux exigences de la RDC.
              </p>
            </div>
            {/* Industrial Visual */}
            <div className="w-full aspect-[4/3] rounded border border-outline-variant bg-surface-container overflow-hidden mt-4 dark:border-outline dark:bg-gray-900">
              <img 
                alt="Installation solaire industrielle" 
                className="w-full h-full object-cover grayscale-[20%] contrast-125" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWX314JvM_pFQhn1jxpKzLGGnsv74NDtBPpMbglm1yHP190v8-B8377jSOxdYGIAvFfAwv4hsWT0K_T7sSkr2jPeMiCACut-o-8D7dKvYpxMroaYBhZMpQAvdhTG_G2q3PWy5dyCDE7itLajylyxpbGxmKsg44Ze-SCxB-4wlN5KB7GwuYj_ZYBRjqYcM1JQAiLV54DKaXhiO6V6WMtP-nLnSu_2A6xFjbYwR7JqsHIbKopU40eeJFe24x-Dek-mbkSETYQo1762sf"
              />
            </div>
          </div>

          {/* Form Area (Bento-style rigid card) */}
          <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant p-6 md:p-8 rounded shadow-sm dark:bg-gray-900 dark:border-outline">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              
              {/* Section 1: Coordonnées */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b border-outline-variant pb-2 mb-2 dark:border-gray-800">
                  <span className="material-symbols-outlined text-primary-container dark:text-orange-400">person</span>
                  <h2 className="font-headline-md text-headline-md text-primary dark:text-white">Coordonnées</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md text-on-surface dark:text-gray-300" htmlFor="nom">Nom complet *</label>
                    <input 
                      className="bg-surface border border-outline-variant rounded p-3 font-body-md text-body-md text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-colors dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:border-orange-500" 
                      id="nom" 
                      name="nom" 
                      required 
                      type="text"
                      value={formData.nom}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md text-on-surface dark:text-gray-300" htmlFor="entreprise">Entreprise (Optionnel)</label>
                    <input 
                      className="bg-surface border border-outline-variant rounded p-3 font-body-md text-body-md text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-colors dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:border-orange-500" 
                      id="entreprise" 
                      name="entreprise" 
                      type="text"
                      value={formData.entreprise}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md text-on-surface dark:text-gray-300" htmlFor="email">Adresse Email *</label>
                    <input 
                      className="bg-surface border border-outline-variant rounded p-3 font-body-md text-body-md text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-colors dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:border-orange-500" 
                      id="email" 
                      name="email" 
                      required 
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md text-on-surface dark:text-gray-300" htmlFor="telephone">Téléphone *</label>
                    <input 
                      className="bg-surface border border-outline-variant rounded p-3 font-body-md text-body-md text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-colors dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:border-orange-500" 
                      id="telephone" 
                      name="telephone" 
                      required 
                      type="tel"
                      value={formData.telephone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Détails du Projet */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b border-outline-variant pb-2 mb-2 dark:border-gray-800">
                  <span className="material-symbols-outlined text-primary-container dark:text-orange-400">solar_power</span>
                  <h2 className="font-headline-md text-headline-md text-primary dark:text-white">Détails du Projet</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1 md:col-span-2">
                    <label className="font-label-md text-label-md text-on-surface dark:text-gray-300" htmlFor="emplacement">Emplacement *</label>
                    <select 
                      className="bg-surface border border-outline-variant rounded p-3 font-body-md text-body-md text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-colors appearance-none dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:border-orange-500" 
                      id="emplacement" 
                      name="emplacement" 
                      required
                      value={formData.emplacement}
                      onChange={handleChange}
                    >
                      <option disabled value="">Sélectionnez une zone...</option>
                      <option value="lubumbashi">Lubumbashi (Zone Principale)</option>
                      <option value="kinshasa">Kinshasa</option>
                      <option value="kolwezi">Kolwezi</option>
                      <option value="autre">Autre province (RDC)</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md text-on-surface mb-1 dark:text-gray-300">Type de projet *</label>
                    <div className="flex flex-col gap-2">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input 
                          className="w-4 h-4 text-primary-container border-outline-variant focus:ring-primary-container dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-orange-600" 
                          name="type_projet" 
                          required 
                          type="radio" 
                          value="residentiel"
                          checked={formData.type_projet === 'residentiel'}
                          onChange={handleChange}
                        />
                        <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface dark:text-gray-400 dark:group-hover:text-white">Résidentiel</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input 
                          className="w-4 h-4 text-primary-container border-outline-variant focus:ring-primary-container dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-orange-600" 
                          name="type_projet" 
                          type="radio" 
                          value="commercial"
                          checked={formData.type_projet === 'commercial'}
                          onChange={handleChange}
                        />
                        <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface dark:text-gray-400 dark:group-hover:text-white">Commercial</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input 
                          className="w-4 h-4 text-primary-container border-outline-variant focus:ring-primary-container dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-orange-600" 
                          name="type_projet" 
                          type="radio" 
                          value="industriel"
                          checked={formData.type_projet === 'industriel'}
                          onChange={handleChange}
                        />
                        <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface dark:text-gray-400 dark:group-hover:text-white">Industriel (Lourd)</span>
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-md text-label-md text-on-surface dark:text-gray-300" htmlFor="puissance">Besoins énergétiques estimés</label>
                    <select 
                      className="bg-surface border border-outline-variant rounded p-3 font-body-md text-body-md text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-colors appearance-none dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:border-orange-500" 
                      id="puissance" 
                      name="puissance"
                      value={formData.puissance}
                      onChange={handleChange}
                    >
                      <option disabled value="">Capacité cible...</option>
                      <option value="under_10kw">Moins de 10 kW</option>
                      <option value="10_50kw">10 kW - 50 kW</option>
                      <option value="50_200kw">50 kW - 200 kW</option>
                      <option value="over_200kw">Plus de 200 kW</option>
                      <option value="inconnu">Je ne suis pas sûr</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1 mt-2">
                  <label className="font-label-md text-label-md text-on-surface dark:text-gray-300" htmlFor="message">Notes additionnelles</label>
                  <textarea 
                    className="bg-surface border border-outline-variant rounded p-3 font-body-md text-body-md text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-colors resize-none dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:border-orange-500" 
                    id="message" 
                    name="message" 
                    placeholder="Spécifiez des contraintes de site ou des équipements spécifiques..." 
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Action Area */}
              <div className="pt-4 border-t border-outline-variant flex justify-end dark:border-gray-800">
                <button 
                  className="bg-secondary text-on-secondary font-label-md text-label-md px-8 py-3 rounded active:scale-95 transition-transform duration-150 hover:bg-secondary-container hover:text-on-secondary-container border border-transparent hover:border-secondary flex items-center gap-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:text-white" 
                  type="submit"
                >
                  Soumettre la demande
                </button>
              </div>
            </form>
          </div>

        </div>
      </main>
    </div>
  );
}