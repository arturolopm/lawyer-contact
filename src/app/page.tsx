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
  'Firma con mas tranquilidad sabiendo que aceptas, que debes ajustar y que riesgo no vale la pena asumir.',
  'Ordena la situacion del inmueble para formalizar, negociar o proyectar decisiones patrimoniales con menos incertidumbre.',
  'Sal de la consulta con una ruta clara sobre documentos, riesgos y siguiente paso.',
];

const trustPillars = [
  {
    title: 'Firmar con mas tranquilidad',
    description:
      'El objetivo no es solo tener un contrato, sino que puedas cerrar acuerdos con reglas claras y menos espacio para problemas despues.',
  },
  {
    title: 'Mover el inmueble con mas seguridad',
    description:
      'Pertenencia y legalizacion se trabajan para que dejes de improvisar y avances con mas claridad sobre viabilidad, pruebas y tramites.',
  },
  {
    title: 'Salir sabiendo que hacer',
    description:
      'La consulta inicial esta pensada para que termines con prioridades claras, no con mas dudas, tambien en asuntos civiles, familiares y patrimoniales.',
  },
];

const practiceAreas = [
  {
    title: 'Asesoria juridica',
    description:
      'Sales con mas claridad sobre tu situacion, los riesgos principales y el siguiente paso que mas te conviene.',
    items: ['Mas claridad para decidir', 'Menos margen para errores costosos', 'Prioridades y documentos claros'],
  },
  {
    title: 'Elaboracion de contratos',
    description:
      'Redactamos acuerdos para que puedas cerrar el negocio con reglas claras y menos espacio para discusiones futuras.',
    items: [
      'Obligaciones y plazos bien definidos',
      'Clausulas pensadas para prevenir conflicto',
      'Mas respaldo para negociar y exigir',
    ],
  },
  {
    title: 'Revision de contratos',
    description:
      'Antes de firmar, entiendes exactamente que aceptas, donde esta el riesgo y que conviene renegociar.',
    items: [
      'Alertas antes de comprometerte',
      'Ajustes concretos para protegerte',
      'Base clara para negociar',
    ],
  },
  {
    title: 'Proceso de pertenencia',
    description:
      'Avanzas con una ruta mas clara para reclamar la propiedad y fortalecer el caso con mejor orden probatorio.',
    items: [
      'Mas claridad sobre viabilidad',
      'Pruebas y documentos mejor organizados',
      'Menos pasos inutiles',
    ],
  },
  {
    title: 'Legalizacion de propiedad',
    description:
      'Buscamos que el inmueble quede listo para que puedas decidir, negociar o proyectar su uso con mayor seguridad juridica.',
    items: [
      'Documentos en mejor orden',
      'Ruta registral y tramites mas claros',
      'Menos incertidumbre sobre el inmueble',
    ],
  },
];

const testimonialThemes = [
  {
    label: 'Antes de firmar',
    title: 'Mas tranquilidad para negociar y cerrar',
    description:
      'Quienes llegan por contratos suelen buscar una sola cosa: entender que estan aceptando, que deben ajustar y que no vale la pena dejar abierto.',
  },
  {
    label: 'Antes de formalizar',
    title: 'Mas seguridad para mover el tema del inmueble',
    description:
      'En pertenencia y legalizacion, lo que mas se valora es dejar de improvisar y avanzar con documentos, pruebas y pasos mas claros.',
  },
  {
    label: 'Despues de la consulta',
    title: 'Un siguiente paso claro en lugar de mas dudas',
    description:
      'La primera asesoria tiene mas valor cuando terminas sabiendo que hacer primero, que riesgo corregir ya y que puede esperar.',
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
      'Ubicamos que necesitas destrabar, que te preocupa hoy y si el asunto pasa por contratos, propiedad u otra materia juridica.',
  },
  {
    step: '02',
    title: 'Revisamos documentos y riesgos',
    description:
      'Identificamos que documento importa de verdad, donde esta el riesgo principal y que conviene corregir primero.',
  },
  {
    step: '03',
    title: 'Definimos alcance, tiempos y honorarios',
    description:
      'Con eso, sales sabiendo cual es el siguiente paso mas razonable y el tipo de acompanamiento que mejor hace sentido.',
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
                Abogada en Colombia para contratos y propiedad
              </div>

              <h1 className='mt-8 max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.03em] text-primary sm:text-6xl lg:text-7xl'>
                Firma, formaliza y decide con mas tranquilidad juridica.
              </h1>

              <p className='mt-8 max-w-3xl text-lg leading-8 text-ink-soft sm:text-xl'>
                Recibe una asesoria juridica para revisar tu caso y actuar con mas claridad. El
                foco principal esta en elaboracion y revision de contratos, proceso de pertenencia
                y legalizacion de propiedad, sin dejar por fuera otros asuntos civiles, familiares
                y patrimoniales.
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
                  Quiero revisar mi caso
                </a>
                <a
                  href='#servicios'
                  className={secondaryLinkClass}
                >
                  Ver como puedo ayudarte
                </a>
              </div>

              <p className='mt-4 max-w-2xl text-sm leading-7 text-ink-soft'>
                Tambien puedes escribir por WhatsApp si hoy lo que necesitas es una decision clara:
                firmar, reclamar, formalizar o saber si conviene esperar.
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
                  Lo que te llevas de la primera consulta
                </h2>

                <ul className='mt-8 space-y-5'>
                  {[
                    'Si hoy te conviene firmar, negociar, formalizar, reclamar o esperar.',
                    'Que documento o prueba cambia realmente la decision.',
                    'Que riesgo vale la pena corregir primero.',
                    'Cual es el siguiente paso que te evita tiempo, costo o desgaste innecesario.',
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
                    El objetivo no es llenarte de terminos tecnicos. Es que termines la
                    conversacion con una ruta clara sobre que hacer, que evitar y como avanzar.
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

          <section className='mx-auto max-w-7xl px-6 py-24 lg:px-10'>
            <SectionHeader
              eyebrow='Prueba social'
              title='Lo que mas valoran quienes consultan.'
              description='No son promesas abstractas. Son los resultados que normalmente se buscan al pedir ayuda para contratos, propiedad o una decision juridica importante.'
            />

            <div className='mt-12 grid gap-6 lg:grid-cols-3'>
              {testimonialThemes.map((item) => (
                <article
                  key={item.title}
                  className='rounded-[2rem] border border-line bg-white/82 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)]'
                >
                  <p className='text-xs font-semibold uppercase tracking-[0.22em] text-secondary'>
                    {item.label}
                  </p>
                  <h3 className='mt-4 font-serif text-3xl leading-tight text-primary'>
                    {item.title}
                  </h3>
                  <p className='mt-5 leading-7 text-ink-soft'>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            id='servicios'
            className='scroll-mt-28 mx-auto max-w-7xl px-6 py-24 lg:px-10'
          >
            <SectionHeader
              eyebrow='Servicios principales'
              title='Servicios pensados para que tomes decisiones con menos riesgo.'
              description='La pagina prioriza contratos, pertenencia y legalizacion de propiedad, pero el criterio detras de cada servicio es el mismo: ayudarte a actuar con mas claridad y mejor respaldo.'
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
                Tambien atendemos otras decisiones juridicas sensibles.
              </h3>
              <p className='mt-4 max-w-3xl leading-7 text-ink-soft'>
                Si tu caso no encaja de forma exacta en los servicios principales, la consulta
                inicial sirve para ubicar la materia, medir viabilidad y definir la mejor ruta.
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
                  title='Una consulta pensada para que salgas con una ruta clara.'
                  description='La conversacion inicial ordena lo importante para que no sigas tomando decisiones juridicas a ciegas.'
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
                    Ten esto a la mano para llegar mas rapido a una decision util.
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
                      posesion y cualquier antecedente que ayude a entender donde esta el riesgo y
                      que conviene hacer primero.
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
              description='La idea es que puedas decidir rapido si esta consulta te ayuda a destrabar lo que hoy te preocupa.'
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
                    title='Pide una asesoria para saber que sigue en tu caso.'
                    description='Completa estos datos para preparar la llamada y ubicar si se trata de contratos, propiedad u otro asunto civil, familiar o patrimonial.'
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
                          Quiero una ruta clara
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
                      Una asesoria para decidir con mas tranquilidad.
                    </h3>
                    <ul className='mt-6 space-y-4'>
                      {[
                        'Entender que esta realmente en juego en tu caso.',
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
                        'Contratos que necesitas cerrar con mas tranquilidad.',
                        'Documentos que quieres revisar antes de comprometerte o reclamar.',
                        'Inmuebles que requieren proceso de pertenencia o legalizacion para destrabar decisiones patrimoniales.',
                        'Consultas civiles, familiares o patrimoniales donde hoy necesitas claridad para actuar.',
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
