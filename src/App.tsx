import React, { useState, useRef } from 'react';
import { ClipboardList, ChefHat, Package, FileText, ChevronRight, CheckCircle, Home, Camera, Upload } from 'lucide-react';

interface Section {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface AffichagesForm {
  infoEntree: boolean | null;
  attesInside: boolean | null;
  infoEntreePhoto: string | null;
  attesInsidePhoto: string | null;
}

function App() {
  const [startedSections, setStartedSections] = useState<string[]>([]);
  const [completedSections, setCompletedSections] = useState<string[]>([]);
  const [focusedSection, setFocusedSection] = useState<string | null>(null);
  const [affichagesForm, setAffichagesForm] = useState<AffichagesForm>({
    infoEntree: null,
    attesInside: null,
    infoEntreePhoto: null,
    attesInsidePhoto: null,
  });

  const fileInputRefInfoEntree = useRef<HTMLInputElement>(null);
  const fileInputRefAttesInside = useRef<HTMLInputElement>(null);

  const sections: Section[] = [
    {
      id: 'affichages',
      title: 'AFFICHAGES',
      description: 'Affichages réglementaires et menus',
      icon: <ClipboardList className="w-6 h-6 text-white" />,
      color: 'bg-blue-500',
    },
    {
      id: 'production',
      title: 'PRODUCTION',
      description: 'Cuisine et préparation des plats',
      icon: <ChefHat className="w-6 h-6 text-white" />,
      color: 'bg-emerald-500',
    },
    {
      id: 'stockage',
      title: 'STOCKAGE',
      description: 'Gestion des stocks alimentaires',
      icon: <Package className="w-6 h-6 text-white" />,
      color: 'bg-orange-500',
    },
    {
      id: 'observations',
      title: 'OBSERVATIONS',
      description: 'Notes et remarques d\'inspection',
      icon: <FileText className="w-6 h-6 text-white" />,
      color: 'bg-purple-500',
    },
  ];

  const handleStartSection = (sectionId: string) => {
    if (!startedSections.includes(sectionId)) {
      setStartedSections([...startedSections, sectionId]);
    }
    setFocusedSection(sectionId);
  };

  const handleFinishSection = (sectionId: string) => {
    if (!completedSections.includes(sectionId)) {
      setCompletedSections([...completedSections, sectionId]);
    }
    setFocusedSection(null);
  };

  const getSectionStatus = (sectionId: string) => {
    if (completedSections.includes(sectionId)) return 'completed';
    if (startedSections.includes(sectionId)) return 'started';
    return 'not-started';
  };

  const handleTakePhoto = async (questionId: 'infoEntree' | 'attesInside') => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement('video');
      video.srcObject = stream;
      await video.play();

      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      context?.drawImage(video, 0, 0);

      const photo = canvas.toDataURL('image/jpeg');
      setAffichagesForm(prev => ({
        ...prev,
        [`${questionId}Photo`]: photo
      }));

      stream.getTracks().forEach(track => track.stop());
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Unable to access camera. Please make sure you have granted camera permissions.');
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, questionId: 'infoEntree' | 'attesInside') => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAffichagesForm(prev => ({
          ...prev,
          [`${questionId}Photo`]: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const renderPhotoSection = (questionId: 'infoEntree' | 'attesInside') => {
    const photo = affichagesForm[`${questionId}Photo`];
    const fileInputRef = questionId === 'infoEntree' ? fileInputRefInfoEntree : fileInputRefAttesInside;

    return (
      <div className="mt-4">
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => handleTakePhoto(questionId)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            <Camera className="w-4 h-4" />
            <span>Take Photo</span>
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
          >
            <Upload className="w-4 h-4" />
            <span>Upload Photo</span>
          </button>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={(e) => handleFileUpload(e, questionId)}
          />
        </div>
        {photo && (
          <div className="mt-2">
            <img
              src={photo}
              alt="Captured or uploaded photo"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        )}
      </div>
    );
  };

  const renderSectionContent = (sectionId: string) => {
    if (sectionId === 'affichages' && startedSections.includes('affichages')) {
      return (
        <div className="mt-6 border-t pt-4">
          <div className="space-y-8">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Affichage info (Entree) ?
              </label>
              <div className="flex space-x-4">
                <button
                  onClick={() => setAffichagesForm({ ...affichagesForm, infoEntree: true })}
                  className={`px-4 py-2 rounded-md ${
                    affichagesForm.infoEntree === true
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Yes
                </button>
                <button
                  onClick={() => setAffichagesForm({ ...affichagesForm, infoEntree: false })}
                  className={`px-4 py-2 rounded-md ${
                    affichagesForm.infoEntree === false
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  No
                </button>
              </div>
              {renderPhotoSection('infoEntree')}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Affichage Attes. (inside) ?
              </label>
              <div className="flex space-x-4">
                <button
                  onClick={() => setAffichagesForm({ ...affichagesForm, attesInside: true })}
                  className={`px-4 py-2 rounded-md ${
                    affichagesForm.attesInside === true
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Yes
                </button>
                <button
                  onClick={() => setAffichagesForm({ ...affichagesForm, attesInside: false })}
                  className={`px-4 py-2 rounded-md ${
                    affichagesForm.attesInside === false
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  No
                </button>
              </div>
              {renderPhotoSection('attesInside')}
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Audit Assessment</h1>
            <p className="text-gray-600 mt-2">
              Complete all four sections of the audit to generate a comprehensive report.
            </p>
          </div>
          {focusedSection && (
            <button
              onClick={() => setFocusedSection(null)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 font-medium transition-colors duration-200"
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {sections
            .filter((section) => !focusedSection || section.id === focusedSection)
            .map((section) => {
              const status = getSectionStatus(section.id);
              
              return (
                <div
                  key={section.id}
                  className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6 ${
                    focusedSection === section.id ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${section.color}`}>
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-gray-900">
                        {section.title}
                      </h2>
                      <p className="text-gray-600 text-sm mt-1">
                        {section.description}
                      </p>
                    </div>
                    {status === 'completed' && (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    )}
                  </div>
                  
                  {renderSectionContent(section.id)}
                  
                  {status === 'not-started' && (
                    <button
                      onClick={() => handleStartSection(section.id)}
                      className="w-full mt-4 flex items-center justify-between px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-md text-gray-700 font-medium transition-colors duration-200"
                    >
                      <span>Start Section</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  )}
                  
                  {status === 'started' && (
                    <button
                      onClick={() => handleFinishSection(section.id)}
                      className="w-full mt-4 flex items-center justify-between px-4 py-2 bg-green-50 hover:bg-green-100 rounded-md text-green-700 font-medium transition-colors duration-200"
                    >
                      <span>Finish Section</span>
                      <CheckCircle className="w-5 h-5" />
                    </button>
                  )}
                  
                  {status === 'completed' && (
                    <div className="w-full mt-4 px-4 py-2 bg-green-50 rounded-md text-green-700 font-medium text-center">
                      Section Completed
                    </div>
                  )}
                </div>
              );
            })}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Audit Progress
          </h2>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
              style={{
                width: `${(completedSections.length / sections.length) * 100}%`,
              }}
            ></div>
          </div>
          <p className="text-gray-600 mt-2">
            {completedSections.length} of {sections.length} sections completed
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
