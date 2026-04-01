import { submitConsultation } from './actions';

const primaryLinkClass =
  'inline-flex min-h-12 items-center justify-center rounded-full border border-accent bg-accent px-6 py-3 text-sm font-bold tracking-[0.18em] text-white uppercase shadow-[0_14px_30px_rgba(180,83,9,0.22)] hover:-translate-y-0.5 hover:bg-[#9a4307] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2';

const whatsappLinkClass =
  'inline-flex min-h-12 items-center justify-center rounded-full border border-[#166534] bg-[#166534] px-6 py-3 text-sm font-bold tracking-[0.18em] text-white uppercase shadow-[0_14px_30px_rgba(22,101,52,0.24)] hover:-translate-y-0.5 hover:bg-[#14532d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#166534] focus-visible:ring-offset-2';

const secondaryLinkClass =
  'inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-white/70 px-6 py-3 text-sm font-bold tracking-[0.18em] text-primary uppercase hover:-translate-y-0.5 hover:border-secondary/35 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2';

const inputClass =
  'mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-base text-ink outline-none placeholder:text-ink-soft/55 focus:border-secondary focus:ring-2 focus:ring-secondary/15';

const labelClass = 'text-sm font-semibold uppercase tracking-[0.16em] text-ink-soft';

const whatsappNumber = '573166295084';
const whatsappMessage = encodeURIComponent(
  'Hola, quiero agendar una asesoria juridica. Necesito ayuda con contratos, propiedad o con otro asunto civil, familiar o patrimonial.'
);
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const heroHighlights = [
  'Abogada en Colombia para asesoria juridica, contratos, proceso de pertenencia y legalizacion de propiedad, con cobertura tambien en derecho civil, familia y patrimonio.',
  'Revision documental y estrategia legal para firmar, negociar, reclamar o regularizar con mas claridad y menos riesgo.',
  'Orientacion concreta sobre viabilidad, documentos clave, tiempos y honorarios desde la primera conversacion.',
];

const trustPillars = [
  {
    title: 'Contratos con mejor respaldo',
    description:
      'Te ayudamos a redactar, ajustar o revisar clausulas para que el negocio tenga alcance claro, obligaciones definidas y menos riesgo de conflicto.',
  },
  {
    title: 'Propiedad en regla',
    description:
      'Ordenamos documentos, antecedentes y estrategia para procesos de pertenencia y rutas de legalizacion de propiedad con enfoque practico.',
  },
  {
    title: 'Cobertura amplia, foco claro',
    description:
      'Tambien atendemos derecho civil, sucesiones, familia, conciliacion, representacion extrajudicial y pensiones para darte una ruta clara desde la primera consulta.',
  },
];

const practiceAreas = [
  {
    title: 'Asesoria juridica',
    description:
      'Consultas para resolver dudas, medir riesgos y definir la ruta legal en contratos, derecho civil, familia, sucesiones y asuntos patrimoniales.',
    items: [
      'Analisis inicial del caso',
      'Orientacion preventiva y estrategica',
      'Definicion de siguientes pasos y documentos clave',
    ],
  },
  {
    title: 'Elaboracion de contratos',
    description:
      'Redactamos contratos a la medida para dejar claras obligaciones, plazos, riesgos y mecanismos de proteccion.',
    items: [
      'Prestacion de servicios y acuerdos civiles',
      'Compraventa, arrendamiento y promesas',
      'Ajustes segun riesgos y necesidades del caso',
    ],
  },
  {
    title: 'Revision de contratos',
    description:
      'Revisamos clausulas antes de que firmes, negocies o reclames, para que entiendas riesgos, obligaciones y ajustes recomendados.',
    items: [
      'Revision previa a firma',
      'Observaciones y recomendaciones de ajuste',
      'Soporte para negociacion o requerimientos',
    ],
  },
  {
    title: 'Proceso de pertenencia',
    description:
      'Estructuramos la ruta juridica y documental para reclamar la propiedad cuando la posesion cumple los requisitos legales.',
    items: [
      'Revision de antecedentes y pruebas',
      'Organizacion del expediente',
      'Acompanamiento en la estrategia del proceso',
    ],
  },
  {
    title: 'Legalizacion de propiedad',
    description:
      'Te ayudamos a revisar titulos, documentos y pasos necesarios para formalizar la situacion juridica del inmueble.',
    items: [
      'Estudio documental del inmueble',
      'Regularizacion y soporte registral',
      'Definicion de tramites y ruta de formalizacion',
    ],
  },
];

const additionalCoverage = [
  'Derecho civil',
  'Sucesiones',
  'Divorcio, custodia y alimentos',
  'Liquidacion de sociedad conyugal',
  'Conciliacion y representacion extrajudicial',
  'Pensiones',
];

const processSteps = [
  {
    step: '01',
    title: 'Escuchamos tu caso y tu objetivo',
    description:
      'Entendemos si necesitas asesoria juridica, elaboracion o revision de contratos, proceso de pertenencia, legalizacion de propiedad o apoyo en otro asunto civil, familiar o patrimonial.',
  },
  {
    step: '02',
    title: 'Revisamos documentos y riesgos',
    description:
      'Revisamos documentos, riesgos y urgencias para definir si conviene negociar, conciliar, formalizar o avanzar con una actuacion mas amplia.',
  },
  {
    step: '03',
    title: 'Definimos alcance, tiempos y honorarios',
    description:
      'Con esa base, te presentamos una propuesta clara sobre el trabajo a realizar y el nivel de acompanamiento recomendado.',
  },
];

const callChecklist = [
  'Una explicacion breve del contrato, inmueble o situacion civil, familiar o patrimonial que necesitas resolver.',
  'Datos de las partes involucradas y, si aplica, informacion basica del predio, acuerdo, tramite o proceso.',
  'Documentos clave si ya los tienes: borradores de contrato, escrituras, certificados, promesas, registros, comunicaciones, providencias, acuerdos o pruebas de posesion.',
  'Tu objetivo inmediato: asesorarte, elaborar o revisar un contrato, iniciar pertenencia, legalizar la propiedad o definir la mejor ruta para otro asunto juridico.',
];

const faqs = [
  {
    question: 'Como se si necesito asesoria juridica o revision de documentos?',
    answer:
      'En la llamada definimos si basta una orientacion puntual o si conviene pasar a revision documental, elaboracion contractual, proceso de pertenencia, legalizacion de propiedad u otro acompanamiento segun el tipo de asunto.',
  },
  {
    question: 'Que contratos puedes elaborar o revisar?',
    answer:
      'Dependiendo del caso, podemos trabajar contratos civiles y acuerdos patrimoniales como prestacion de servicios, compraventa, arrendamiento, promesas y otros documentos donde necesites claridad sobre obligaciones, plazos y riesgos.',
  },
  {
    question: 'Tambien atiendes derecho civil, familia, sucesiones o conciliacion?',
    answer:
      'Si. Aunque esta pagina prioriza asesoria juridica, contratos, pertenencia y legalizacion de propiedad, tambien podemos revisar asuntos de derecho civil, sucesiones, divorcio, custodia, alimentos, liquidacion de sociedad conyugal, conciliacion, representacion extrajudicial y pensiones, segun el caso.',
  },
  {
    question: 'Cuando conviene iniciar un proceso de pertenencia o legalizar una propiedad?',
    answer:
      'Conviene hacerlo antes de iniciar tramites o tomar decisiones sobre el bien. Revisar antecedentes, posesion, titulos y soportes desde el comienzo ayuda a evitar pasos inutiles y a definir la ruta juridica correcta.',
  },
  {
    question: 'Puedo enviar contratos o documentos antes de la llamada?',
    answer:
      'Si. Contratos, certificados, escrituras, promesas, comunicaciones, decisiones judiciales, acuerdos o pruebas de posesion ayudan a valorar mejor el caso desde la primera conversacion.',
  },
  {
    question: 'Como se manejan los honorarios?',
    answer:
      'Los honorarios dependen del tipo de asunto, la etapa juridica, el volumen documental, la urgencia y el alcance del acompanamiento requerido. La idea de la llamada es darte claridad sobre ese alcance antes de tomar una decision.',
  },
];

type HomeProps = {
  searchParams: Promise<{
    sent?: string;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const sent = (await searchParams).sent;
  const hasSavedLead = sent === '1';
  const hasInvalidLead = sent === 'invalid';

  return (
    <>
      <a
        href='#contenido'
        className='sr-only absolute left-4 top-4 z-50 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary shadow-lg focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-accent'
      >
        Saltar al contenido
      </a>

      <div className='relative isolate overflow-hidden'>
        <div className='pointer-events-none absolute inset-x-0 top-0 -z-20 h-[42rem] bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.18),transparent_35%),radial-gradient(circle_at_left,rgba(30,58,138,0.12),transparent_28%)]' />
        <div className='pointer-events-none absolute right-[-8rem] top-28 -z-10 h-80 w-80 rounded-full border border-white/40 bg-white/20 blur-3xl' />

        <header className='sticky top-0 z-40 border-b border-white/60 bg-white/70 backdrop-blur-xl'>
          <div className='mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10'>
            <a
              href='#'
              className='min-w-0 text-primary'
            >
              <p className='text-xs font-semibold uppercase tracking-[0.28em] text-secondary'>
                Amanda Abogada
              </p>
              <p className='mt-1 font-serif text-xl leading-none sm:text-2xl'>
                Contratos, civil, familia y patrimonio
              </p>
            </a>

            <nav className='hidden items-center gap-6 text-sm font-semibold text-ink-soft lg:flex'>
              <a
                href='#servicios'
                className='hover:text-primary'
              >
                Servicios
              </a>
              <a
                href='#proceso'
                className='hover:text-primary'
              >
                Proceso
              </a>
              <a
                href='#faq'
                className='hover:text-primary'
              >
                Preguntas
              </a>
            </nav>

            <div className='flex items-center gap-3'>
              <a
                href={whatsappHref}
                target='_blank'
                rel='noopener noreferrer'
                className='hidden min-h-12 items-center justify-center rounded-full border border-[#166534]/18 bg-white px-5 py-3 text-sm font-bold tracking-[0.14em] text-[#166534] uppercase hover:-translate-y-0.5 hover:border-[#166534]/40 hover:bg-[#166534]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#166534] focus-visible:ring-offset-2 sm:inline-flex'
              >
                WhatsApp
              </a>
              <a
                href='#agenda'
                className={primaryLinkClass}
              >
                Agendar llamada
              </a>
            </div>
          </div>
        </header>

        <main
          id='contenido'
          className='pb-20'
        >
          <section className='mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(22rem,0.8fr)] lg:px-10 lg:py-24'>
            <div>
              <div className='inline-flex rounded-full border border-secondary/15 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-secondary'>
                Abogada y asesoria juridica en Colombia
              </div>

              <h1 className='mt-8 max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.03em] text-primary sm:text-6xl lg:text-7xl'>
                Asesoria juridica en Colombia para contratos, pertenencia y legalizacion de propiedad.
              </h1>

              <p className='mt-8 max-w-3xl text-lg leading-8 text-ink-soft sm:text-xl'>
                Agenda una llamada para revisar tu caso. Priorizamos asesoria juridica,
                elaboracion y revision de contratos, proceso de pertenencia y legalizacion de
                propiedad, y tambien atendemos derecho civil, sucesiones, familia, conciliacion,
                representacion extrajudicial y pensiones.
              </p>

              <div className='mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap'>
                <a
                  href={whatsappHref}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={whatsappLinkClass}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href='#agenda'
                  className={primaryLinkClass}
                >
                  Agendar asesoria inicial
                </a>
                <a
                  href='#servicios'
                  className={secondaryLinkClass}
                >
                  Ver servicios juridicos
                </a>
              </div>

              <p className='mt-4 max-w-2xl text-sm leading-7 text-ink-soft'>
                Tambien puedes escribir por WhatsApp para contarnos si necesitas revisar un
                contrato, ordenar documentos del inmueble o validar la ruta de otro asunto
                juridico.
              </p>

              <div className='mt-12 grid gap-4 sm:grid-cols-2'>
                {heroHighlights.map((highlight) => (
                  <div
                    key={highlight}
                    className='rounded-[1.75rem] border border-white/70 bg-white/72 p-5 shadow-[0_20px_70px_rgba(15,23,42,0.06)] backdrop-blur'
                  >
                    <div className='mb-4 h-2.5 w-12 rounded-full bg-accent/75' />
                    <p className='text-base leading-7 text-ink-soft'>{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className='relative'>
              <div className='rounded-[2rem] border border-white/70 bg-paper p-8 shadow-[0_28px_80px_rgba(15,23,42,0.1)] backdrop-blur'>
                <p className='text-xs font-semibold uppercase tracking-[0.3em] text-secondary'>
                  Asesoria inicial
                </p>
                <h2 className='mt-4 font-serif text-3xl leading-tight text-primary'>
                  Lo que definimos en tu primera consulta
                </h2>

                <ul className='mt-8 space-y-5'>
                  {[
                    'Si te conviene una asesoria puntual, una revision de contrato, un proceso de pertenencia, una legalizacion de propiedad o una ruta juridica mas amplia.',
                    'Que documentos conviene revisar primero para no perder tiempo ni enfoque.',
                    'Que riesgos existen hoy y cual es el siguiente paso mas razonable.',
                    'Como se define el alcance del trabajo y la propuesta de honorarios.',
                  ].map((item) => (
                    <li
                      key={item}
                      className='flex gap-4'
                    >
                      <span
                        aria-hidden='true'
                        className='mt-2 h-2.5 w-2.5 flex-none rounded-full bg-accent'
                      />
                      <p className='leading-7 text-ink-soft'>{item}</p>
                    </li>
                  ))}
                </ul>

                <div className='mt-8 rounded-[1.75rem] border border-accent/20 bg-[linear-gradient(180deg,rgba(244,215,163,0.22),rgba(255,255,255,0.96))] p-6'>
                  <p className='text-sm font-semibold uppercase tracking-[0.18em] text-accent'>
                    Honorarios con alcance claro
                  </p>
                  <p className='mt-3 text-base leading-7 text-ink-soft'>
                    Cada asunto se analiza de forma individual. La asesoria inicial sirve para
                    medir viabilidad, ordenar documentos y definir si necesitas una intervencion
                    puntual o acompanamiento juridico integral.
                  </p>
                </div>

                <a
                  href={whatsappHref}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`${whatsappLinkClass} mt-6 w-full`}
                >
                  Hablar ahora por WhatsApp
                </a>
              </div>
            </aside>
          </section>

          <section className='mx-auto max-w-7xl px-6 lg:px-10'>
            <div className='rounded-[2rem] border border-white/70 bg-white/78 p-6 shadow-[0_16px_60px_rgba(15,23,42,0.05)] backdrop-blur lg:p-8'>
              <div className='grid gap-6 lg:grid-cols-3'>
                {trustPillars.map((pillar) => (
                  <article
                    key={pillar.title}
                    className='rounded-[1.5rem] border border-line/70 bg-white/80 p-6'
                  >
                    <div className='mb-5 h-px w-14 bg-accent/80' />
                    <h2 className='font-serif text-2xl text-primary'>{pillar.title}</h2>
                    <p className='mt-4 leading-7 text-ink-soft'>{pillar.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            id='servicios'
            className='scroll-mt-28 mx-auto max-w-7xl px-6 py-24 lg:px-10'
          >
            <SectionHeader
              eyebrow='Servicios principales'
              title='Servicios juridicos principales para contratos y propiedad.'
              description='Estos son los servicios que mas suelen activar una consulta inicial. Tambien atendemos otros asuntos civiles, familiares y patrimoniales cuando el caso lo requiere.'
            />

            <div className='mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
              {practiceAreas.map((area) => (
                <article
                  key={area.title}
                  className='rounded-[2rem] border border-line bg-white/82 p-7 shadow-[0_20px_70px_rgba(15,23,42,0.06)]'
                >
                  <p className='text-xs font-semibold uppercase tracking-[0.22em] text-secondary'>
                    Servicio legal
                  </p>
                  <h3 className='mt-4 font-serif text-3xl leading-tight text-primary'>
                    {area.title}
                  </h3>
                  <p className='mt-4 leading-7 text-ink-soft'>{area.description}</p>

                  <ul className='mt-6 space-y-3'>
                    {area.items.map((item) => (
                      <li
                        key={item}
                        className='flex gap-3 text-base text-ink-soft'
                      >
                        <span
                          aria-hidden='true'
                          className='mt-2 h-2 w-2 flex-none rounded-full bg-accent'
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className='mt-8 rounded-[2rem] border border-line bg-white/78 p-7 shadow-[0_16px_60px_rgba(15,23,42,0.05)]'>
              <p className='text-xs font-semibold uppercase tracking-[0.24em] text-secondary'>
                Cobertura complementaria
              </p>
              <h3 className='mt-4 font-serif text-3xl leading-tight text-primary'>
                Tambien atendemos otras consultas civiles, familiares y patrimoniales.
              </h3>
              <p className='mt-4 max-w-3xl leading-7 text-ink-soft'>
                Si tu consulta no encaja de forma exacta en los servicios principales, la llamada
                inicial sirve para ubicar la materia, revisar viabilidad y definir la mejor ruta.
              </p>

              <div className='mt-6 flex flex-wrap gap-3'>
                {additionalCoverage.map((item) => (
                  <span
                    key={item}
                    className='inline-flex min-h-11 items-center rounded-full border border-secondary/15 bg-secondary/6 px-4 py-2 text-sm font-semibold text-primary'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section
            id='proceso'
            className='scroll-mt-28 mx-auto max-w-7xl px-6 pb-24 lg:px-10'
          >
            <div className='grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)]'>
              <div>
                <SectionHeader
                  eyebrow='Como trabajamos'
                  title='Como trabajamos tu consulta juridica.'
                  description='La primera llamada aterriza viabilidad, documentos y siguiente paso sin enredarte con tecnicismos innecesarios.'
                />

                <div className='mt-10 space-y-5'>
                  {processSteps.map((step) => (
                    <article
                      key={step.step}
                      className='rounded-[1.75rem] border border-line bg-white/80 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.04)]'
                    >
                      <div className='flex flex-col gap-4 sm:flex-row sm:items-start'>
                        <div className='inline-flex h-14 w-14 flex-none items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-sm font-bold tracking-[0.2em] text-accent'>
                          {step.step}
                        </div>
                        <div>
                          <h3 className='font-serif text-2xl text-primary'>{step.title}</h3>
                          <p className='mt-3 leading-7 text-ink-soft'>{step.description}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <aside className='lg:pt-24'>
                <div className='rounded-[2rem] border border-primary/12 bg-primary p-8 text-white shadow-[0_24px_90px_rgba(15,23,42,0.18)]'>
                  <p className='text-xs font-semibold uppercase tracking-[0.28em] text-accent-soft'>
                    Antes de agendar
                  </p>
                  <h3 className='mt-4 font-serif text-3xl leading-tight'>
                    Ten a la mano esta informacion para aprovechar mejor la asesoria.
                  </h3>

                  <ul className='mt-8 space-y-4'>
                    {callChecklist.map((item) => (
                      <li
                        key={item}
                        className='flex gap-3'
                      >
                        <span
                          aria-hidden='true'
                          className='mt-2 h-2.5 w-2.5 flex-none rounded-full bg-accent-soft'
                        />
                        <span className='leading-7 text-slate-200'>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className='mt-8 rounded-[1.5rem] border border-white/12 bg-white/8 p-5'>
                    <p className='text-sm font-semibold uppercase tracking-[0.18em] text-accent-soft'>
                      Ideal para esta primera conversacion
                    </p>
                    <p className='mt-3 leading-7 text-slate-200'>
                      Contratos por elaborar o revisar, escrituras, certificados, promesas,
                      requerimientos, decisiones judiciales, acuerdos familiares, pruebas de
                      posesion y cualquier antecedente que ayude a entender el riesgo juridico
                      real.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </section>

          <section
            id='faq'
            className='scroll-mt-28 mx-auto max-w-7xl px-6 pb-24 lg:px-10'
          >
            <SectionHeader
              eyebrow='Preguntas frecuentes'
              title='Respuestas que reducen friccion antes de la llamada.'
              description='La intencion de esta seccion es ayudarte a decidir rapido si esta pagina corresponde al tipo de servicio juridico que estas buscando.'
            />

            <div className='mt-10 space-y-4'>
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className='rounded-[1.75rem] border border-line bg-white/82 p-6 shadow-[0_14px_40px_rgba(15,23,42,0.04)]'
                >
                  <summary className='flex cursor-pointer items-start justify-between gap-4'>
                    <span className='font-serif text-2xl leading-tight text-primary'>
                      {faq.question}
                    </span>
                    <span className='inline-flex h-8 w-8 flex-none items-center justify-center rounded-full border border-line text-sm font-bold text-accent'>
                      +
                    </span>
                  </summary>
                  <p className='mt-4 max-w-4xl leading-7 text-ink-soft'>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section
            id='agenda'
            className='scroll-mt-28 mx-auto max-w-7xl px-6 pb-10 lg:px-10'
          >
            <div className='rounded-[2.25rem] border border-white/70 bg-white/82 p-8 shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur lg:p-10'>
              <div className='grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.92fr)]'>
                <div>
                  <SectionHeader
                    eyebrow='Agenda una llamada'
                    title='Agenda una asesoria juridica inicial.'
                    description='Completa estos datos para preparar la llamada y ubicar si se trata de contratos, proceso de pertenencia, legalizacion de propiedad u otro asunto civil, familiar o patrimonial.'
                  />

                  {hasSavedLead ? (
                    <div
                      role='status'
                      aria-live='polite'
                      className='mt-8 rounded-[1.5rem] border border-secondary/18 bg-secondary/8 p-5 text-sm leading-7 text-ink-soft'
                    >
                      Solicitud guardada localmente para pruebas. El siguiente paso para produccion
                      sera conectar este flujo con correo, WhatsApp, calendario o CRM.
                    </div>
                  ) : null}

                  {hasInvalidLead ? (
                    <div
                      role='alert'
                      className='mt-8 rounded-[1.5rem] border border-red-200 bg-red-50 p-5 text-sm leading-7 text-red-800'
                    >
                      Completa nombre, telefono, servicio o tema de interes y un resumen del caso para
                      registrar la solicitud.
                    </div>
                  ) : null}

                  <form
                    action={submitConsultation}
                    className='mt-8 grid gap-5 md:grid-cols-2'
                  >
                    <div className='hidden'>
                      <label htmlFor='company'>Empresa</label>
                      <input
                        id='company'
                        name='company'
                        type='text'
                        tabIndex={-1}
                        autoComplete='off'
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='fullName'
                        className={labelClass}
                      >
                        Nombre completo
                      </label>
                      <input
                        id='fullName'
                        name='fullName'
                        type='text'
                        autoComplete='name'
                        required
                        className={inputClass}
                        placeholder='Tu nombre'
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='phone'
                        className={labelClass}
                      >
                        Telefono o WhatsApp
                      </label>
                      <input
                        id='phone'
                        name='phone'
                        type='tel'
                        autoComplete='tel'
                        required
                        className={inputClass}
                        placeholder='+57 ...'
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='email'
                        className={labelClass}
                      >
                        Correo electronico
                      </label>
                      <input
                        id='email'
                        name='email'
                        type='email'
                        autoComplete='email'
                        className={inputClass}
                        placeholder='nombre@correo.com'
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='city'
                        className={labelClass}
                      >
                        Ciudad
                      </label>
                      <input
                        id='city'
                        name='city'
                        type='text'
                        autoComplete='address-level2'
                        className={inputClass}
                        placeholder='Bogota, Medellin, Cali...'
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='service'
                        className={labelClass}
                      >
                        Servicio o tema de interes
                      </label>
                      <select
                        id='service'
                        name='service'
                        required
                        defaultValue=''
                        className={inputClass}
                      >
                        <option
                          value=''
                          disabled
                        >
                          Selecciona una opcion
                        </option>
                        <option>Asesoria juridica</option>
                        <option>Elaboracion de contratos</option>
                        <option>Revision de contratos</option>
                        <option>Proceso de pertenencia</option>
                        <option>Legalizacion de propiedad</option>
                        <option>Derecho civil</option>
                        <option>Sucesiones</option>
                        <option>Divorcio, custodia o alimentos</option>
                        <option>Liquidacion de sociedad conyugal</option>
                        <option>Conciliacion o representacion extrajudicial</option>
                        <option>Pensiones</option>
                        <option>No estoy seguro aun</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor='preferredWindow'
                        className={labelClass}
                      >
                        Horario preferido
                      </label>
                      <select
                        id='preferredWindow'
                        name='preferredWindow'
                        defaultValue=''
                        className={inputClass}
                      >
                        <option
                          value=''
                          disabled
                        >
                          Elige una franja
                        </option>
                        <option>Manana</option>
                        <option>Tarde</option>
                        <option>Noche</option>
                        <option>Fin de semana</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor='contactPreference'
                        className={labelClass}
                      >
                        Medio de contacto
                      </label>
                      <select
                        id='contactPreference'
                        name='contactPreference'
                        defaultValue='Llamada'
                        className={inputClass}
                      >
                        <option>Llamada</option>
                        <option>WhatsApp</option>
                        <option>Videollamada</option>
                        <option>Correo electronico</option>
                      </select>
                    </div>

                    <div className='md:col-span-2'>
                      <label
                        htmlFor='summary'
                        className={labelClass}
                      >
                        Resumen del caso
                      </label>
                      <textarea
                        id='summary'
                        name='summary'
                        required
                        rows={5}
                        className={`${inputClass} resize-y`}
                        placeholder='Cuentanos que necesitas resolver, que documentos tienes y si se trata de contratos, propiedad o de otro asunto juridico.'
                      />
                    </div>

                    <div className='md:col-span-2'>
                      <div className='flex flex-col gap-4 sm:flex-row'>
                        <button
                          type='submit'
                          className={`${primaryLinkClass} w-full sm:w-auto`}
                        >
                          Solicitar asesoria inicial
                        </button>
                        <a
                          href={whatsappHref}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#166534]/20 bg-white px-6 py-3 text-sm font-bold tracking-[0.18em] text-[#166534] uppercase hover:-translate-y-0.5 hover:border-[#166534]/40 hover:bg-[#166534]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#166534] focus-visible:ring-offset-2 sm:w-auto'
                        >
                          Prefiero WhatsApp
                        </a>
                      </div>
                      <p className='mt-4 max-w-2xl text-sm leading-7 text-ink-soft'>
                        Tus datos se usan solo para revisar la consulta inicial y preparar el
                        contacto. Cada caso requiere analisis individual y esta pagina no sustituye
                        asesoria juridica personalizada.
                      </p>
                    </div>
                  </form>
                </div>

                <aside className='space-y-5'>
                  <div className='rounded-[1.75rem] border border-line bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(15,23,42,0.86))] p-7 text-white'>
                    <p className='text-xs font-semibold uppercase tracking-[0.24em] text-accent-soft'>
                      Que puedes esperar
                    </p>
                    <h3 className='mt-4 font-serif text-3xl leading-tight'>
                      Una asesoria inicial para decidir con criterio.
                    </h3>
                    <ul className='mt-6 space-y-4'>
                      {[
                        'Comprender el punto juridico central de tu caso.',
                        'Definir el siguiente paso mas razonable antes de firmar, reclamar, conciliar o formalizar.',
                        'Saber si necesitas una intervencion puntual o un acompanamiento mas amplio.',
                      ].map((item) => (
                        <li
                          key={item}
                          className='flex gap-3'
                        >
                          <span
                            aria-hidden='true'
                            className='mt-2 h-2.5 w-2.5 flex-none rounded-full bg-accent-soft'
                          />
                          <span className='leading-7 text-slate-200'>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className='rounded-[1.75rem] border border-line bg-white p-7'>
                    <p className='text-xs font-semibold uppercase tracking-[0.24em] text-secondary'>
                      Ideal para consultas como
                    </p>
                    <ul className='mt-5 space-y-3 text-base leading-7 text-ink-soft'>
                      {[
                        'Contratos que necesitas elaborar desde cero o ajustar con mejores clausulas.',
                        'Documentos que quieres revisar antes de firmar, negociar o reclamar.',
                        'Inmuebles que requieren proceso de pertenencia o legalizacion para darles seguridad juridica.',
                        'Consultas civiles, familiares o patrimoniales que necesitan una ruta clara desde el inicio.',
                      ].map((item) => (
                        <li
                          key={item}
                          className='flex gap-3'
                        >
                          <span
                            aria-hidden='true'
                            className='mt-2 h-2 w-2 flex-none rounded-full bg-accent'
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <footer className='mx-auto max-w-7xl px-6 pt-10 pb-12 text-sm text-ink-soft lg:px-10'>
            <div className='flex flex-col gap-4 border-t border-line pt-6 md:flex-row md:items-center md:justify-between'>
              <p>
                Amanda Abogada. Abogada en Colombia para contratos, derecho civil, familia,
                sucesiones, conciliacion, pensiones y asuntos patrimoniales.
              </p>
              <p>
                Sitio orientado a consultas iniciales, con foco en contratos, proceso de
                pertenencia y legalizacion de propiedad.
              </p>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className='max-w-3xl'>
      <p className='text-xs font-semibold uppercase tracking-[0.28em] text-secondary'>{eyebrow}</p>
      <h2 className='mt-5 font-serif text-4xl leading-tight text-primary sm:text-5xl'>{title}</h2>
      <p className='mt-5 text-lg leading-8 text-ink-soft'>{description}</p>
    </div>
  );
}
