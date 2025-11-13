import { useState, useEffect } from "react";
import { Toaster } from "sonner";

export default function App() {
  const [moonLarge, setMoonLarge] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const personalMessages = [
    "You bring so much joy and light into this world, Bazana! 🌟",
    "Your smile has the power to brighten even the darkest days ✨",
    "I'm so grateful to have someone as wonderful as you in my life 💕",
    "May this new year of your life be filled with endless happiness 🎉",
    "You deserve all the beautiful things life has to offer 🌸",
    "Like the moon, you illuminate the darkness with your presence 🌙"
  ];

  const arabicPoem = [
    "يا مَن تشبهينَ القمرَ في سُكونه",
    "وفيكِ من النورِ ما يذيبُ الليالي",
    "حديثُكِ ناعمٌ كنسمةِ فجرٍ",
    "وضحكتُكِ وطنٌ لا يُغادرُ خيالي",
    "",
    "لم أكتبِ الشعرَ يومًا لِعابِرٍ",
    "ولا عَبَرتْ في خواطري مثلُ طيفِكْ",
    "حديثُكِ مرَّ خفيفًا جميلاً",
    "كأنّهُ فكرةٌ… ثم بقيتِكْ",
    "",
    "ويومُ ميلادِكِ... بين السطورِ يُضيء",
    "كأنكِ قمرٌ، وقلبي سماءُ الهدايا",
    "",
    "فأنتِ القصيدةُ في كلِّ بيتٍ",
    "وأنتِ الحروفُ ونبضُ الحكاية",
    "فكلُّ عامٍ وأنتِ للقلبِ قمرٌ",
    "وإن كنتِ بعيدةً… ففي القلبِ باقية",
    "",
    "وأرجو بأن تبقي دومًا بخيرٍ",
    "ويحوطكِ النورُ في كلِّ بداية"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowCard(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % personalMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [personalMessages.length]);

  useEffect(() => {
    const calculateTimeElapsed = () => {
      const birthDate = new Date('2010-07-07T00:00:00');
      const now = new Date();
      const diffInMs = now.getTime() - birthDate.getTime();
      
      const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);
      
      setTimeElapsed({ days, hours, minutes, seconds });
    };

    calculateTimeElapsed();
    const timer = setInterval(calculateTimeElapsed, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-2xl animate-pulse">⭐</div>
        <div className="absolute top-20 right-20 text-xl animate-pulse delay-300">✨</div>
        <div className="absolute bottom-20 left-20 text-xl animate-pulse delay-700">⭐</div>
        <div className="absolute bottom-10 right-10 text-2xl animate-pulse delay-1000">✨</div>
        <div className="absolute top-1/2 left-5 text-lg animate-pulse delay-500">⭐</div>
        <div className="absolute top-1/3 right-5 text-lg animate-pulse delay-1200">✨</div>
        <div className="absolute top-1/4 left-1/4 text-xl animate-pulse delay-200">⭐</div>
        <div className="absolute bottom-1/3 right-1/3 text-lg animate-pulse delay-800">✨</div>
        <div className="absolute top-3/4 left-1/3 text-lg animate-pulse delay-400">⭐</div>
        <div className="absolute top-1/6 right-1/4 text-xl animate-pulse delay-600">✨</div>
      </div>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/2 text-4xl animate-bounce">🎈</div>
        <div className="absolute bottom-20 left-10 text-3xl animate-bounce delay-300">🎂</div>
        <div className="absolute bottom-10 right-20 text-4xl animate-pulse delay-500">🎉</div>
        <div className="absolute top-1/2 right-10 text-2xl animate-bounce delay-700">🌟</div>
        <div className="absolute top-1/3 left-10 text-2xl animate-pulse delay-1000">💖</div>
        <div className="absolute top-1/4 right-1/4 text-2xl animate-float delay-200">🦋</div>
        <div className="absolute bottom-1/3 left-1/3 text-2xl animate-float delay-500">🌈</div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${showCard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-purple-200">
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-10 animate-pulse"></div>
              <h1 className="text-6xl font-bold text-white mb-4 animate-pulse relative z-10">
                Happy 15th Birthday, Fati!
              </h1>
              <div className="text-5xl font-elegant text-white mb-4 relative z-10">
                🌙 My Beautiful Moon 🌙
              </div>
              <p className="text-xl text-purple-100 relative z-10">
                Born July 7, 2010 - A special day for a very special girl, Fati ❤️
              </p>
            </div>

            <div className="p-8">
              <div className="text-center mb-8">
                <div className="text-8xl mb-6 animate-bounce">🎉</div>
                <h2 className="text-4xl font-bold gradient-text mb-6">
                  Today is All About You!
                </h2>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-8 border-2 border-purple-200 shadow-lg">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Bazana, on this beautiful day, I want you to know how incredibly special you are. 
                    Your kindness, your laughter, and your amazing spirit make the world a brighter place. 
                    I hope your 15th birthday is filled with all your favorite things and surrounded by love.
                  </p>
                  <div className="h-16 flex items-center justify-center">
                    <p className="text-lg text-purple-600 font-medium italic transition-all duration-500 animate-fade-in">
                      {personalMessages[currentMessageIndex]}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-pink-50 rounded-2xl p-8 mb-8 border-2 border-yellow-200 shadow-lg text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  ✨ The world just got luckier since:
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white rounded-xl p-4 shadow-md border-2 border-yellow-200">
                    <div className="text-3xl font-bold text-purple-600 mb-1">{timeElapsed.days.toLocaleString()}</div>
                    <div className="text-sm text-gray-600 font-medium">Days</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md border-2 border-pink-200">
                    <div className="text-3xl font-bold text-pink-600 mb-1">{timeElapsed.hours}</div>
                    <div className="text-sm text-gray-600 font-medium">Hours</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md border-2 border-indigo-200">
                    <div className="text-3xl font-bold text-indigo-600 mb-1">{timeElapsed.minutes}</div>
                    <div className="text-sm text-gray-600 font-medium">Minutes</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md border-2 border-green-200">
                    <div className="text-3xl font-bold text-green-600 mb-1 animate-pulse">{timeElapsed.seconds}</div>
                    <div className="text-sm text-gray-600 font-medium">Seconds</div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Every single one of these moments has been made brighter because you exist! 🌟
                </p>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-8 mb-8 border-2 border-indigo-200 shadow-lg text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  🌙 The Moon on Your Birth Day - July 7, 2010
                </h3>
                <div className="flex flex-col items-center mb-6">
                  <img 
                    src="https://lunaf.com/img/moon/h-phase-27.png" 
                    alt="Moon phase on July 7, 2010" 
                    className="mb-4 w-32 h-32 transition-transform duration-500 cursor-pointer animate-pulse"
                    onClick={() => setMoonLarge(true)}
                  />

                  {moonLarge && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setMoonLarge(false)}>
                      <div className="relative" onClick={e => e.stopPropagation()}>
                        <img 
                          src="https://lunaf.com/img/moon/h-phase-27.png" 
                          alt="Moon phase on July 7, 2010" 
                          className="w-[90vw] max-w-md h-auto rounded-xl shadow-2xl border-4 border-white"
                          style={{ animation: 'none' }}
                        />
                        <button className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 text-lg font-bold text-gray-700 shadow hover:bg-gray-200 transition" onClick={() => setMoonLarge(false)}>
                          &times;
                        </button>
                      </div>
                    </div>
                  )}
                  <p className="text-lg text-gray-700 max-w-2xl">
                    This was the moon phase when you were born - a waning crescent, symbolizing new beginnings and the promise of light to come. 
                    Just like you brought light into this world on that special day! 🌟
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 via-white to-indigo-50 rounded-2xl p-8 mb-8 border-2 border-purple-200 shadow-lg">
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
                  🌙 A Special Poem Just for You 🌙
                </h3>
                <div className="text-center">
                  <div className="text-4xl mb-6">🌙✨</div>
                  <div className="max-w-3xl mx-auto">
                    {arabicPoem.map((line, index) => (
                      <p 
                        key={index} 
                        className={`text-lg leading-relaxed mb-2 ${
                          line === "" ? "mb-4" : "text-gray-700"
                        }`}
                        style={{ 
                          fontFamily: 'Arial, sans-serif',
                          direction: 'rtl',
                          textAlign: 'center'
                        }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-6 text-center border-2 border-purple-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-3">🌙</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Moonlight Beauty</h3>
                  <p className="text-gray-700">Like the moon you love, you illuminate the darkness with your gentle light</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-xl p-6 text-center border-2 border-indigo-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-3">⭐</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Shining Star</h3>
                  <p className="text-gray-700">At 15, you're becoming the brightest star in your own constellation</p>
                </div>
                <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-xl p-6 text-center border-2 border-pink-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-3">🌟</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Bright Future</h3>
                  <p className="text-gray-700">May this new year bring you closer to all your dreams and aspirations</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl p-6 text-center border-2 border-yellow-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-3">💝</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Special Gift</h3>
                  <p className="text-gray-700">You are a gift to everyone who knows you, Fati</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 via-white to-pink-50 rounded-2xl p-8 border-2 border-purple-200 shadow-lg">
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
                  💌 A Personal Message Just for You
                </h3>
                <div className="text-center">
                  <div className="text-6xl mb-4">💖</div>
                  <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    Bazana, I wanted to create something special just for you on your 15th birthday. 
                    You mean so much to me, and I hope this day brings you as much happiness as you bring to others. 
                    May your heart be filled with joy, your day be filled with laughter, and your year ahead be filled with wonderful surprises.
                    Like the moon that guides travelers through the night, may you always find your way to happiness.
                  </p>
                  <div className="mt-6 text-2xl font-elegant text-purple-600">
                    Happy 15th Birthday, My Beautiful Moon! 🌙🎂✨
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <div className="inline-block animate-bounce">
                  <div className="text-8xl mb-2">🎂</div>
                  <p className="text-lg text-gray-600 font-medium">Make a wish under the stars! 🌟</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 pb-8">
          <div className="bg-white rounded-2xl p-6 max-w-md mx-auto shadow-lg border-2 border-purple-200">
            <p className="text-lg text-gray-700 mb-2">
              Made with love, just for you 💕
            </p>
            <div className="text-3xl">
              🌙 🎉 🎈 ✨ 💖 🌟 🎂 🌙
            </div>
          </div>
        </div>
      </div>

      <Toaster position="top-center" />
    </div>
  );
}
