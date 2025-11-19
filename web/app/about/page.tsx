import { getAuthorBio } from '@/lib/books';
import Image from 'next/image';

export default function AboutPage() {
  const bio = getAuthorBio();

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          About the Author
        </h1>
        
        <div className="flex justify-center mb-8">
          <Image
            src="/assets/ansilo_boff_logo.jpg?v=3"
            alt="Ansilo Boff Logo"
            width={300}
            height={150}
            className="rounded-lg"
            priority
          />
        </div>
        
        <div className="bg-gray-900 rounded-lg p-8 md:p-12">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 leading-relaxed mb-6 text-justify">
              I grew up in the thick of church life. Sunday wasn't just a day... it was the center of gravity. My earliest memories are filled with hymns echoing through the church my dad pastored, and the faint smell of worn leather Bibles. Church wasn't something we went to; it was the air we breathed. Even when I later studied medicine and built a career in business, faith never took a back seat. Every spare moment I had, I spent buried in Scripture, convinced that if I could just study a little harder, pray a little longer, serve a little better, I'd understand God the way He truly wanted to be known.
            </p>
            
            <div className="flex justify-center my-8">
              <Image
                src="/assets/bible_in_apartment.jpg?v=2"
                alt="Bible in apartment"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6 text-justify">
              I was raised Baptist: conservative, careful, certain. Then I found myself drawn into the charismatic world, full of passion and expectancy. I led teams, prayed for the sick, and witnessed what I could only describe as miracles. I saw lives changed, hearts healed, even bodies restored.
            </p>
            
            <div className="flex justify-center my-8">
              <Image
                src="/assets/person_prayed_for1.jpg"
                alt="Person being prayed for"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6 text-justify">
              But over time, a quiet unease began to surface... like a thread tugging loose beneath the surface of my belief system. I started noticing that the things I'd built my faith around didn't always line up with what Jesus actually said. The God I'd worshipped for decades didn't sound like the Father Jesus revealed, and it had taken me a lifetime to pick up on it.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6 text-justify">
              It was a slow, disorienting awakening. And yet, that moment of doubt became the beginning of something far more beautiful... a search for truth that finally felt alive.
            </p>
            
            <br />
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6 text-justify">
              I've earned no theology degrees (despite years of study which far exceed the hours required for these). Just scars from decades in medicine, pharma, and church life, dissecting human bodies and human beliefs. I wore the "born-again, Spirit-filled, Bible-believing" badge proudly... until Jesus' unfiltered words turned my blood to ice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

