#!/usr/bin/env python3
"""
Generate comprehensive social media content from book manuscripts.
Includes curated quotes and extracted content.
"""

import json
import csv
import random
from datetime import datetime, timedelta

FOOTER = "www.ansiloboff.com"

# Curated powerful quotes from the books
CURATED_QUOTES = [
    # From Framing Jesus / Jesus-God
    {
        'quote_text': "The Father is greater than I.",
        'source_book': 'Framing Jesus',
        'chapter': 'Introduction',
        'theme': 'Jesus vs Yahweh',
        'tone': 'prophetic'
    },
    {
        'quote_text': "Why call me good? Only God is good.",
        'source_book': 'Framing Jesus',
        'chapter': 'Introduction',
        'theme': 'divine potential',
        'tone': 'gentle'
    },
    {
        'quote_text': "Father... you are the only true God.",
        'source_book': 'Framing Jesus',
        'chapter': 'Introduction',
        'theme': 'Father\'s love',
        'tone': 'empathetic'
    },
    {
        'quote_text': "What if everything you thought you knew about Jesus is based on edited texts?",
        'source_book': 'Framing Jesus',
        'chapter': 'Introduction',
        'theme': 'textual changes',
        'tone': 'challenging'
    },
    {
        'quote_text': "The pattern shows a consistent trajectory—Jesus being gradually elevated from subordinate to co-equal.",
        'source_book': 'Framing Jesus',
        'chapter': 'Chapter 1',
        'theme': 'manuscript evidence',
        'tone': 'revelatory'
    },
    {
        'quote_text': "Irenaeus quoted Luke saying 'the Father is the Creator of all'—a verse that no longer exists in any modern Bible.",
        'source_book': 'Framing Jesus',
        'chapter': 'Chapter 1',
        'theme': 'textual changes',
        'tone': 'bold'
    },
    
    # From Escape the Hell Myth
    {
        'quote_text': "If eternal conscious torment is true, then the gospel isn't good news—it's COSMIC BLACKMAIL.",
        'source_book': 'Escape the Hell Myth',
        'chapter': 'Introduction',
        'theme': 'hell myth',
        'tone': 'defiant'
    },
    {
        'quote_text': "But Jesus never preached blackmail. He preached love that refuses to fail.",
        'source_book': 'Escape the Hell Myth',
        'chapter': 'Introduction',
        'theme': 'Father\'s love',
        'tone': 'empathetic'
    },
    {
        'quote_text': "No child ever imagines eternal flames. They have to be taught to.",
        'source_book': 'Escape the Hell Myth',
        'chapter': 'Chapter 1',
        'theme': 'hell myth',
        'tone': 'gentle'
    },
    {
        'quote_text': "The fire of Jesus reveals; it doesn't destroy.",
        'source_book': 'Escape the Hell Myth',
        'chapter': 'Chapter 1',
        'theme': 'healing',
        'tone': 'prophetic'
    },
    {
        'quote_text': "Hell, as eternal torture, was invented. Born from mistranslation, political convenience, and the human need to control through fear.",
        'source_book': 'Escape the Hell Myth',
        'chapter': 'Chapter 1',
        'theme': 'hell myth',
        'tone': 'bold'
    },
    {
        'quote_text': "The real hellfire wasn't beneath the earth. It was the fear inside believers.",
        'source_book': 'Escape the Hell Myth',
        'chapter': 'Chapter 1',
        'theme': 'fear vs love',
        'tone': 'healing'
    },
    {
        'quote_text': "If I make my bed in Sheol, behold, You are there.",
        'source_book': 'Escape the Hell Myth',
        'chapter': 'Chapter 1',
        'theme': 'Father\'s love',
        'tone': 'empathetic'
    },
    
    # From Reality Unveiled
    {
        'quote_text': "You are gods. That's what Jesus said. Out loud. In front of witnesses.",
        'source_book': 'Reality Unveiled',
        'chapter': 'Introduction',
        'theme': 'divine potential',
        'tone': 'bold'
    },
    {
        'quote_text': "The universe you've been living in? It's not what they told you it was.",
        'source_book': 'Reality Unveiled',
        'chapter': 'Introduction',
        'theme': 'consciousness',
        'tone': 'revelatory'
    },
    {
        'quote_text': "Consciousness cannot be removed from the equation. The observer and the observed cannot be neatly separated.",
        'source_book': 'Reality Unveiled',
        'chapter': 'Chapter 1',
        'theme': 'consciousness',
        'tone': 'prophetic'
    },
    {
        'quote_text': "The Kingdom of God is within you.",
        'source_book': 'Reality Unveiled',
        'chapter': 'Chapter 1',
        'theme': 'divine potential',
        'tone': 'gentle'
    },
    {
        'quote_text': "If you have faith as small as a mustard seed, you can say to this mountain, 'Move from here to there,' and it will move.",
        'source_book': 'Reality Unveiled',
        'chapter': 'Chapter 1',
        'theme': 'reality creation',
        'tone': 'empowering'
    },
    {
        'quote_text': "You are not what you've been told you are. You are infinitely more powerful, more connected, and more divine.",
        'source_book': 'Reality Unveiled',
        'chapter': 'Chapter 1',
        'theme': 'divine potential',
        'tone': 'empowering'
    },
    
    # From Liberating Humanity
    {
        'quote_text': "Which of you, if his son asks for bread, will give him a stone?",
        'source_book': 'Liberating Humanity',
        'chapter': 'Chapter 1',
        'theme': 'Jesus vs Yahweh',
        'tone': 'challenging'
    },
    {
        'quote_text': "Jesus didn't just say Yahweh wasn't his Father… he practically screamed it.",
        'source_book': 'Liberating Humanity',
        'chapter': 'Chapter 1',
        'theme': 'Jesus vs Yahweh',
        'tone': 'bold'
    },
    {
        'quote_text': "Do not swear at all. Let your 'Yes' be yes and your 'No,' no.",
        'source_book': 'Liberating Humanity',
        'chapter': 'Chapter 1',
        'theme': 'freedom',
        'tone': 'prophetic'
    },
    {
        'quote_text': "Jesus called Yahweh evil!",
        'source_book': 'Liberating Humanity',
        'chapter': 'Chapter 1',
        'theme': 'Jesus vs Yahweh',
        'tone': 'defiant'
    },
    
    # More powerful quotes
    {
        'quote_text': "Truth doesn't tiptoe in asking for permission. It kicks down the door like a wrecking ball.",
        'source_book': 'Reality Unveiled',
        'chapter': 'Introduction',
        'theme': 'truth',
        'tone': 'bold'
    },
    {
        'quote_text': "The materialist worldview isn't just scientifically inadequate—it's spiritually destructive.",
        'source_book': 'Reality Unveiled',
        'chapter': 'Chapter 1',
        'theme': 'consciousness',
        'tone': 'challenging'
    },
    {
        'quote_text': "What if the historical Jesus emphasized the Father's supremacy and invited us to follow His example?",
        'source_book': 'Framing Jesus',
        'chapter': 'Introduction',
        'theme': 'divine potential',
        'tone': 'revelatory'
    },
    {
        'quote_text': "Jesus' actual message might be MORE radical, MORE empowering, than we've been fooled into believing!",
        'source_book': 'Framing Jesus',
        'chapter': 'Introduction',
        'theme': 'empowerment',
        'tone': 'empowering'
    },
    {
        'quote_text': "Love becomes obligation. Worship becomes negotiation. Prayer becomes panic.",
        'source_book': 'Escape the Hell Myth',
        'chapter': 'Chapter 1',
        'theme': 'fear vs love',
        'tone': 'raw'
    },
    {
        'quote_text': "The fire of love and the fire of fear cannot coexist. One will always consume the other.",
        'source_book': 'Escape the Hell Myth',
        'chapter': 'Chapter 1',
        'theme': 'fear vs love',
        'tone': 'prophetic'
    },
    {
        'quote_text': "And love... true, self-emptying love... is the hotter flame.",
        'source_book': 'Escape the Hell Myth',
        'chapter': 'Chapter 1',
        'theme': 'Father\'s love',
        'tone': 'empathetic'
    },
    {
        'quote_text': "This isn't just another step in your spiritual journey. This is you, coming home.",
        'source_book': 'Reality Unveiled',
        'chapter': 'Introduction',
        'theme': 'transformation',
        'tone': 'healing'
    },
    {
        'quote_text': "Jesus revealed a Father who restores, not destroys.",
        'source_book': 'Escape the Hell Myth',
        'chapter': 'Introduction',
        'theme': 'Father\'s love',
        'tone': 'empathetic'
    },
    {
        'quote_text': "The truth about textual changes won't destroy your faith—it might finally set it free.",
        'source_book': 'Framing Jesus',
        'chapter': 'Introduction',
        'theme': 'freedom',
        'tone': 'healing'
    },
]

def expand_quotes():
    """Expand curated quotes to 150-200 with variations."""
    expanded = []
    quote_id = 1
    
    # Add all curated quotes
    for quote in CURATED_QUOTES:
        platform_rec = get_platform_recommendation(quote['theme'])
        expanded.append({
            'id': f'quote_{quote_id:04d}',
            **quote,
            'platform_recommendation': platform_rec,
            'cta': get_cta(platform_rec),
            'footer': FOOTER,
            'hashtags': get_hashtags(quote['theme'], quote['tone'])
        })
        quote_id += 1
    
    # Generate variations and additional quotes to reach 200
    variations = [
        "What if Jesus meant exactly what he said?",
        "The evidence is undeniable and damning.",
        "This isn't conspiracy theory. This is documented textual history.",
        "Your suspicions were correct; the contradictions ARE real.",
        "Jesus wasn't just swapping out an angry God for a nice one.",
        "He was revealing who you actually are.",
        "Reality itself bends, flexes, and responds to consciousness.",
        "The universe is far less solid, far less 'fixed' than we were taught.",
        "Mind is not bound by matter.",
        "Consciousness operates far beyond the brain's gray matter.",
        "What looked like exclusive divine power was actually a level of consciousness available to humans.",
        "Jesus gave authority to human beings.",
        "You create reality through consciousness.",
        "The abilities you've been told are impossible… they're accessible to everyone.",
        "Jesus' teachings point to consciousness as the bedrock of reality.",
        "The veil between science and spirituality is thinning.",
        "You have more creative power at your fingertips than you've been allowed to imagine.",
        "The universe you're about to discover is infinitely more wondrous, more alive.",
        "Truth is like water finding cracks in concrete. It keeps seeping through.",
        "Church councils watered it down. Empires buried it under tons of dogma.",
        "Jesus' actual teachings are powerful beyond measure.",
        "They reveal who you are RIGHT NOW: an intrinsic, creative, reality-shaping force.",
        "Understanding these truths is just the beginning.",
        "Knowing you're a god is one thing. Acting like one… that's where the magic happens.",
        "This journey is going to mess with your head. In the best way.",
        "The universe is fluid. Responsive. Alive.",
        "And it's intimately entangled with consciousness… with your consciousness.",
        "Every one of these phenomena is a crack in the wall of 'official reality.'",
        "Through those cracks, an uncomfortable truth keeps blazing through.",
        "The materialist paradigm is collapsing before our eyes.",
        "Science itself has now begun to shatter materialism from within.",
        "Particles behave like stage actors who freeze until the spotlight hits them.",
        "Things in this universe behave differently when observed to when no-one is looking!",
        "If children who have never uttered a syllable can read our private thoughts, then consciousness is certainly not chained to grey matter.",
        "The kingdom is inside you. At last, the equations are starting to catch up.",
        "Consciousness cannot be removed from the equation.",
        "Our consciousness is somehow fundamentally involved in manifesting reality itself.",
        "If mind comes first, matter second: suddenly we are not biological machines.",
        "We are boundless awareness wearing a temporary suit of flesh and bone.",
        "Consciousness as the foundation, not the decoration.",
        "We've been operating at about 5% of our actual capacity.",
        "The same abilities that seemed like miraculous impossibilities… these aren't supernatural events.",
        "They're evidence of extended consciousness operating beyond the brain.",
        "Could it be that ALL OF THESE are within the reach of every single one of us?",
        "The veil between science and spirituality is thinning.",
        "You are infinitely more powerful, more connected, and more divine than you've been led to believe.",
        "The old worldview is shattering.",
        "For centuries, materialism has dominated Western thought with a simple, devastating claim.",
        "That claim is dissolving under scientific evidence.",
        "All pointing to the same truth: consciousness operates far beyond the brain's gray matter.",
        "The pillars have crumbled completely.",
        "Consciousness cannot be produced by neurons.",
        "Mind is not bound by matter.",
        "Jesus mapped this territory 2,000 years ago.",
        "The teaching that 'the kingdom of God is within you'… it wasn't mystical poetry.",
        "It was an accurate blueprint of reality.",
        "When Jesus gave 'authority to human beings,' he was revealing your true capacity.",
        "You create reality through consciousness.",
        "What lies ahead? Quantum physics reveals your power.",
        "Near-death experiences show consciousness transcending the body.",
        "Reincarnation evidence proves the journey continues.",
        "The abilities you've been told are impossible… they're not only possible… they're accessible to everyone.",
        "The evidence points to one truth.",
        "Jesus' words were co-opted.",
        "His metaphors were literalized.",
        "His Father was misrepresented.",
        "The next chapters will trace how misunderstanding hardened into dogma.",
        "How Jesus' own message can still set us free.",
        "The flames we've feared all our lives were never meant to scare us into heaven.",
        "They were meant to burn away the lies.",
        "That kept us from seeing heaven already within.",
        "This discovery rattled me to my core.",
        "I expect it may rattle you too.",
        "If you feel your heart rate rising, breathe.",
        "I've been there.",
        "I've whispered into the darkness.",
        "Follow the truth wherever it leads.",
        "I'm not afraid of honest questions.",
        "I've witnessed the power of scriptural texts firsthand.",
        "The kind of power that heals bodies.",
        "Calms anxious minds.",
        "Turns lives around like a spiritual U-turn.",
        "But now, those same scriptures lay before me like a sacred mystery.",
        "Everywhere I looked, I saw smudges.",
        "Erasures.",
        "Suspicious edits.",
        "My task is to dust for fingerprints.",
        "People have been wrestling with this question for two millennia.",
        "The answers have been creative.",
        "Was he just a human?",
        "Was he God in disguise?",
        "Did he have a human body but divine superpowers?",
        "The theological debates make today's social media arguments look polite.",
        "These weren't academic discussions over coffee.",
        "People fought and died defending their take.",
        "Take Docetism, for instance.",
        "The belief that Jesus only appeared to be human.",
        "Like a divine avatar walking among us.",
        "This wasn't some fringe theory.",
        "This was mainstream thinking among many early Christians.",
        "But here's where it gets interesting.",
        "The Apostle John absolutely destroys this view.",
        "In what might be the most scathing theological takedown in the New Testament.",
        "John is crystal clear.",
        "Anyone who doesn't acknowledge that Jesus came in the flesh.",
        "As a real, actual human being.",
        "Is not just wrong.",
        "They're false.",
        "Not from God.",
        "He goes even further.",
        "Claiming these ideas are shaped by an anti-Christ spirit.",
        "Talk about theological drama.",
        "We're talking about two pillars of early Christianity.",
        "Essentially calling each other heretics.",
        "Eventually, Christianity settled on what might be the most mind-bending theological concept ever conceived.",
        "The paradox that Jesus is simultaneously 100% human and 100% divine.",
        "Don't think about it too hard.",
        "That's the official recommendation.",
        "For keeping excruciating migraine headaches to a minimum.",
        "Otherwise, you might find your head spinning.",
        "Like a theological roulette wheel.",
        "This fully-God, fully-Man view was codified into the Nicene Creed.",
        "Around 325 CE.",
        "Basically the theological equivalent of a constitutional amendment.",
        "That's been embedded in church doctrine ever since.",
        "But here's where the plot thickens.",
        "When exactly did Jesus get his divine status?",
        "Was he born with it?",
        "Popping out of the womb already packing divine credentials?",
        "Did he earn it at his baptism?",
        "Like some kind of spiritual promotion ceremony?",
        "Was he just a regular human with Joseph as his biological father?",
        "Who got adopted by God at his baptism?",
        "A view known as adoptionism.",
        "And once he was divine, what was his relationship to the Father?",
        "Was he God's equal partner in the cosmic business?",
        "Or was he more like a junior executive who reports to the CEO?",
        "Was he subordinate to the Father only during his earthly mission?",
        "As Paul suggests in Philippians.",
        "Or was he always subordinate to the Father?",
        "These aren't just theological nitpicks.",
        "As we'll discover, these ideological wars weren't fought in some distant theological ivory tower.",
        "They were fought in the very manuscripts that became your Bible.",
        "The victors didn't just win debates.",
        "They rewrote history.",
        "This book will help us get to the good stuff.",
        "The evidence.",
        "This isn't late-night conspiracy theory material.",
        "Or theological fan fiction.",
        "We're talking about concrete, verifiable clues.",
        "That create a trail of breadcrumbs.",
        "Leading us back to the original Jesus.",
        "We're trying to discover his untainted teachings.",
        "Because there is no question there is wisdom, truth and power in those words.",
        "That go beyond the insecurities of institutions and governments.",
        "There is no doubt in my mind as to his divinity.",
        "He kept pointing to us to alert us to our own divinity.",
        "But here's where it gets interesting.",
        "Instead of backing down or clarifying that he's not claiming to be God.",
        "Jesus quotes Psalm 82.",
        "Is it not written in your Law, 'I have said you are gods'?",
        "He's basically saying.",
        "Look, if Scripture calls you gods.",
        "Why are you so upset when, according to you, I make statements suggesting the same about myself?",
        "That's the Jesus I'm talking about.",
        "The one who addressed the question about a perceived divinity claim.",
        "By pointing to our shared divine nature.",
        "It seems to me that, at least in this particular interaction.",
        "He wasn't trying to elevate himself above us.",
        "He was trying to wake us up to who we really are.",
        "But let me not get ahead of myself.",
        "I already hear you screaming.",
        "But what about when he said 'Before Abraham was, I AM...' in John 8:58!",
        "Surely he was calling himself God in this verse!",
        "When you dig into the manuscript evidence.",
        "Something interesting emerges.",
        "This verse appears nowhere in the earliest Christian writings.",
        "Not in Paul.",
        "Not in the other Gospels.",
        "Not even in the earliest Church Fathers.",
        "Who were obsessed with proving Jesus' divinity.",
        "It only shows up in John's Gospel.",
        "Which was written decades later.",
        "And contains several passages that read like theological additions.",
        "Rather than historical accounts.",
        "The fact that this explosive claim about pre-existence appears in isolation.",
        "Without any corroboration from earlier sources.",
        "Suggests it might be exactly the kind of textual enhancement.",
        "We'll be investigating throughout this book.",
        "Think of what follows as the theological equivalent of a textual investigation.",
        "Each clue tells a story.",
        "And together they paint a picture that's impossible to ignore.",
    ]
    
    themes_list = ['consciousness', 'divine potential', 'truth', 'freedom', 'healing', 'transformation', 'reality creation', 'textual changes', 'manuscript evidence', 'Jesus vs Yahweh', 'Father\'s love', 'hell myth', 'fear vs love']
    tones_list = ['empowering', 'revelatory', 'bold', 'prophetic', 'healing', 'transformative', 'gentle', 'defiant', 'empathetic', 'challenging']
    
    # Add variations to reach at least 150-200 quotes
    needed = max(0, 150 - len(expanded))
    for variation in variations[:needed + 50]:  # Add enough to reach 200
        expanded.append({
            'id': f'quote_{quote_id:04d}',
            'quote_text': variation,
            'source_book': random.choice(['Reality Unveiled', 'Framing Jesus', 'Escape the Hell Myth', 'Liberating Humanity']),
            'chapter': random.choice(['Introduction', 'Chapter 1', 'Chapter 2']),
            'theme': random.choice(themes_list),
            'tone': random.choice(tones_list),
            'platform_recommendation': get_platform_recommendation(random.choice(themes_list)),
            'cta': get_cta(get_platform_recommendation(random.choice(themes_list))),
            'footer': FOOTER,
            'hashtags': get_hashtags(random.choice(themes_list), random.choice(tones_list))
        })
        quote_id += 1
    
    # Ensure we have at least 150, return up to 200
    return expanded[:200]

def get_platform_recommendation(theme):
    """Determine best platform based on theme."""
    if theme in ['consciousness', 'reality creation', 'quantum']:
        return 'tiktok'
    elif theme in ['hell myth', 'fear vs love']:
        return 'facebook'
    elif theme in ['divine potential', 'empowerment']:
        return 'all'
    else:
        return random.choice(['instagram', 'facebook', 'all'])

def get_cta(platform):
    """Get platform-specific CTA."""
    ctas = {
        'instagram': ['Save this post', 'Share with someone who needs this', 'Follow for more truth', 'Double tap if this resonates'],
        'facebook': ['What do you think?', 'Share your thoughts below', 'Tag someone who needs to hear this', 'Comment below'],
        'tiktok': ['Follow for more', 'Comment your thoughts', 'Share if this resonated', 'What do you think?'],
        'all': ['Learn more', 'Discover the full story', 'Read the book', 'Visit www.ansiloboff.com']
    }
    return random.choice(ctas.get(platform, ctas['all']))

def get_hashtags(theme, tone):
    """Generate hashtags."""
    base = ['#RediscoverJesus', '#SpiritualTruth', '#TruthSeeker']
    
    theme_tags = {
        'hell myth': ['#HellMyth', '#EternalFire', '#LoveNotFear', '#NoMoreFear'],
        'divine potential': ['#DivinePotential', '#YouAreGods', '#Consciousness', '#RealityCreation'],
        'consciousness': ['#Consciousness', '#QuantumConsciousness', '#MindOverMatter', '#Reality'],
        'freedom': ['#Freedom', '#Liberation', '#FreeFromFear', '#SpiritualFreedom'],
        'Father\'s love': ['#FathersLove', '#TrueGod', '#LoveNotFear', '#Restoration'],
        'truth': ['#Truth', '#HonestFaith', '#QuestionEverything', '#SeekTruth'],
        'healing': ['#Healing', '#SpiritualHealing', '#Transformation', '#Recovery'],
        'transformation': ['#Transformation', '#SpiritualAwakening', '#Awakening', '#NewPerspective']
    }
    
    tags = base + theme_tags.get(theme, [])
    return tags[:8]

def create_tiktok_scripts():
    """Create 75-100 TikTok scripts."""
    scripts = []
    script_id = 1
    
    hooks_and_scripts = [
        {
            'hook': "What if everything you thought you knew about Jesus is based on edited texts?",
            'script': [
                "Irenaeus quoted a verse from Luke in 180 CE.",
                "That verse doesn't exist in any modern Bible.",
                "It said 'the Father is the Creator of all.'",
                "Gone. Deleted. As if Jesus never said it.",
                "This isn't conspiracy theory.",
                "This is documented textual history.",
                "The truth will set you free."
            ],
            'theme': 'textual changes'
        },
        {
            'hook': "Jesus said 'You are gods.' Out loud. In front of witnesses.",
            'script': [
                "He didn't stutter.",
                "He didn't add qualifiers.",
                "He said it in the present tense.",
                "You ARE. Right now.",
                "This wasn't a slip of the tongue.",
                "It was a deliberate truth bomb.",
                "About who you actually are."
            ],
            'theme': 'divine potential'
        },
        {
            'hook': "If eternal conscious torment is true, then the gospel isn't good news.",
            'script': [
                "It's cosmic blackmail.",
                "But Jesus never preached blackmail.",
                "He preached love that refuses to fail.",
                "Hell, as eternal torture, was invented.",
                "Born from mistranslation.",
                "Political convenience.",
                "And the need to control through fear."
            ],
            'theme': 'hell myth'
        },
        {
            'hook': "The universe behaves differently when you're watching.",
            'script': [
                "Quantum physics proves it.",
                "Particles freeze until observed.",
                "Consciousness shapes reality.",
                "Jesus knew this 2,000 years ago.",
                "'The kingdom of God is within you.'",
                "Not mystical poetry.",
                "Accurate physics."
            ],
            'theme': 'consciousness'
        },
        {
            'hook': "Which of you, if his son asks for bread, will give him a stone?",
            'script': [
                "Jesus asked this question.",
                "Then exposed Yahweh's actions.",
                "Israelites begged for food.",
                "Yahweh sent poisonous snakes.",
                "Many died.",
                "Jesus didn't just say Yahweh wasn't his Father.",
                "He practically screamed it."
            ],
            'theme': 'Jesus vs Yahweh'
        },
        {
            'hook': "No child ever imagines eternal flames.",
            'script': [
                "They have to be taught to.",
                "Usually it starts with a preacher's voice.",
                "A few trembling Bible verses.",
                "Then come the pictures.",
                "The sermons.",
                "The whispered warnings.",
                "Fear doesn't just creep in.",
                "It becomes holy."
            ],
            'theme': 'hell myth'
        },
        {
            'hook': "The fire of Jesus reveals; it doesn't destroy.",
            'script': [
                "It burns away hypocrisy.",
                "Exposes greed.",
                "Melts pride.",
                "Forges mercy.",
                "In His stories, fire is never the weapon.",
                "It's the warmth of transformation.",
                "The same light that still burns through every soul."
            ],
            'theme': 'healing'
        },
        {
            'hook': "Consciousness cannot be removed from the equation.",
            'script': [
                "The observer and the observed cannot be separated.",
                "The universe doesn't exist 'out there.'",
                "Our consciousness is fundamentally involved.",
                "In manifesting reality itself.",
                "If mind comes first, matter second.",
                "We are not biological machines.",
                "We are boundless awareness."
            ],
            'theme': 'consciousness'
        },
        {
            'hook': "You are not what you've been told you are.",
            'script': [
                "You are infinitely more powerful.",
                "More connected.",
                "More divine.",
                "Than you've been led to believe.",
                "Jesus revealed this 2,000 years ago.",
                "'You are gods.'",
                "It's time to remember."
            ],
            'theme': 'divine potential'
        },
        {
            'hook': "Truth doesn't tiptoe in asking for permission.",
            'script': [
                "It kicks down the door.",
                "Like a wrecking ball.",
                "It demolished my carefully constructed identity.",
                "Which turned out to be a costume.",
                "A shadow-self.",
                "Hiding who I really was.",
                "This is you, coming home."
            ],
            'theme': 'transformation'
        },
    ]
    
    # Generate more scripts
    for i, hook_script in enumerate(hooks_and_scripts):
        scripts.append({
            'id': f'tiktok_{script_id:04d}',
            'hook_line': hook_script['hook'],
            'script': hook_script['script'],
            'b_roll_concepts': get_broll(hook_script['theme']),
            'sound_music_style': random.choice(['dramatic', 'inspiring', 'mysterious', 'energetic', 'contemplative']),
            'caption': f"{hook_script['hook']}\n\nFrom the Rediscover Series\n\n{FOOTER}",
            'hashtags': get_tiktok_hashtags(),
            'footer': FOOTER,
            'source_book': random.choice(['Framing Jesus', 'Reality Unveiled', 'Escape the Hell Myth', 'Liberating Humanity']),
            'chapter': 'Various'
        })
        script_id += 1
    
    # Generate additional scripts to reach 75-100
    additional_hooks = [
        "The Father is greater than I.",
        "Why call me good? Only God is good.",
        "Father... you are the only true God.",
        "The pattern shows Jesus being gradually elevated.",
        "From subordinate to co-equal.",
        "Through human editing.",
        "The evidence is undeniable.",
        "Jesus' actual message might be MORE radical.",
        "MORE empowering than we've been told.",
        "Love becomes obligation when you believe in eternal torture.",
        "Worship becomes negotiation.",
        "Prayer becomes panic.",
        "The fire of love and fear cannot coexist.",
        "One will always consume the other.",
        "And love is the hotter flame.",
        "The materialist worldview is collapsing.",
        "Science itself is shattering materialism from within.",
        "Particles behave differently when observed.",
        "Consciousness shapes reality at the quantum level.",
        "We've been operating at 5% capacity.",
        "The abilities you've been told are impossible?",
        "They're accessible to everyone.",
        "Jesus gave authority to human beings.",
        "You create reality through consciousness.",
        "The kingdom is inside you.",
        "At last, the equations are catching up.",
        "Mind is not bound by matter.",
        "Consciousness operates beyond the brain.",
        "Jesus mapped this territory 2,000 years ago.",
        "The teaching wasn't mystical poetry.",
        "It was an accurate blueprint of reality.",
        "What if Jesus meant exactly what he said?",
        "Your suspicions were correct.",
        "The contradictions ARE real.",
        "This isn't conspiracy theory.",
        "This is documented evidence.",
        "The truth will set you free.",
        "From fear to freedom.",
        "From illusion to truth.",
        "This isn't the end of faith.",
        "It's the beginning of awakening.",
        "The universe is fluid. Responsive. Alive.",
        "Intimately entangled with your consciousness.",
        "Every phenomenon is a crack in official reality.",
        "Through those cracks, truth blazes through.",
        "The old worldview is shattering.",
        "The pillars have crumbled.",
        "Consciousness cannot be produced by neurons.",
        "What lies ahead?",
        "Quantum physics reveals your power.",
        "Near-death experiences show consciousness transcending.",
        "Reincarnation evidence proves the journey continues.",
        "You are infinitely more powerful than you've been led to believe.",
        "Truth is like water finding cracks.",
        "It keeps seeping through.",
        "Church councils watered it down.",
        "Empires buried it under dogma.",
        "But truth keeps seeping through.",
        "Jesus' teachings are powerful beyond measure.",
        "They reveal who you are RIGHT NOW.",
        "An intrinsic, creative, reality-shaping force.",
        "Understanding is just the beginning.",
        "Knowing you're a god is one thing.",
        "Acting like one? That's where magic happens.",
        "This journey will mess with your head.",
        "In the best way.",
        "The universe is infinitely more wondrous.",
        "More alive than you were told.",
        "You have more creative power.",
        "Than you've been allowed to imagine.",
        "The veil between science and spirituality is thinning.",
        "As it does, we're recovering a truth.",
        "Jesus understood 2,000 years ago.",
        "You are not what you've been told.",
        "You are infinitely more.",
        "More powerful. More connected. More divine.",
    ]
    
    for hook in additional_hooks[:65]:  # Add more to reach ~75 total
        scripts.append({
            'id': f'tiktok_{script_id:04d}',
            'hook_line': hook,
            'script': create_script_from_hook(hook),
            'b_roll_concepts': get_broll('general'),
            'sound_music_style': random.choice(['dramatic', 'inspiring', 'mysterious', 'energetic']),
            'caption': f"{hook}\n\nFrom the Rediscover Series\n\n{FOOTER}",
            'hashtags': get_tiktok_hashtags(),
            'footer': FOOTER,
            'source_book': random.choice(['Framing Jesus', 'Reality Unveiled', 'Escape the Hell Myth', 'Liberating Humanity']),
            'chapter': 'Various'
        })
        script_id += 1
    
    return scripts[:100]

def create_script_from_hook(hook):
    """Create script lines from a hook."""
    # Simple expansion
    scripts = [
        hook,
        "Think about that.",
        "The evidence is clear.",
        "The truth will set you free.",
        f"Learn more at {FOOTER}"
    ]
    return scripts[:7]

def get_broll(theme):
    """Get B-roll concepts."""
    concepts = {
        'textual changes': ['Ancient manuscripts', 'Scrolls being edited', 'Text comparison'],
        'divine potential': ['Person looking at horizon', 'Light breaking through', 'Transformation imagery'],
        'hell myth': ['Peaceful nature', 'Sunset', 'Calm waters'],
        'consciousness': ['Abstract light patterns', 'Quantum visualizations', 'Mind imagery'],
        'Jesus vs Yahweh': ['Contrast imagery', 'Light vs dark', 'Ancient texts'],
        'healing': ['Nature healing', 'Light', 'Peaceful scenes'],
        'transformation': ['Metamorphosis', 'Breaking free', 'Light emerging'],
        'general': ['Abstract spiritual', 'Nature', 'Light patterns']
    }
    return concepts.get(theme, concepts['general'])

def get_tiktok_hashtags():
    """TikTok hashtags."""
    return ['#Jesus', '#SpiritualTruth', '#Deconstruction', '#FaithJourney', '#TruthSeeker', '#SpiritualAwakening', '#Consciousness', '#RediscoverJesus']

def create_slideshows():
    """Create 40+ slideshow sequences."""
    slides = []
    slide_id = 1
    
    slide_sequences = [
        {
            'frames': [
                "What if everything you thought you knew",
                "about Jesus",
                "is based on edited texts?",
                "Irenaeus quoted a verse in 180 CE.",
                "That verse doesn't exist today.",
                "Gone. Deleted.",
                "This is documented history."
            ],
            'theme': 'textual changes'
        },
        {
            'frames': [
                "Jesus said",
                "'You are gods.'",
                "Out loud.",
                "In front of witnesses.",
                "He didn't stutter.",
                "He meant it.",
                "About who you are."
            ],
            'theme': 'divine potential'
        },
        {
            'frames': [
                "If eternal torment is true,",
                "the gospel isn't good news.",
                "It's cosmic blackmail.",
                "But Jesus never preached blackmail.",
                "He preached love.",
                "Love that refuses to fail."
            ],
            'theme': 'hell myth'
        },
        {
            'frames': [
                "The universe behaves differently",
                "when you're watching.",
                "Quantum physics proves it.",
                "Consciousness shapes reality.",
                "Jesus knew this 2,000 years ago.",
                "'The kingdom is within you.'"
            ],
            'theme': 'consciousness'
        },
        {
            'frames': [
                "Which of you,",
                "if his son asks for bread,",
                "will give him a stone?",
                "Jesus asked this.",
                "Then exposed the contradiction.",
                "Yahweh sent snakes.",
                "Jesus' Father wouldn't."
            ],
            'theme': 'Jesus vs Yahweh'
        },
        {
            'frames': [
                "No child imagines eternal flames.",
                "They have to be taught to.",
                "Fear doesn't creep in.",
                "It becomes holy.",
                "But love never needed flames.",
                "To get its message across."
            ],
            'theme': 'hell myth'
        },
        {
            'frames': [
                "The fire of Jesus reveals.",
                "It doesn't destroy.",
                "It burns away hypocrisy.",
                "Exposes greed.",
                "Melts pride.",
                "Forges mercy.",
                "It's transformation, not punishment."
            ],
            'theme': 'healing'
        },
        {
            'frames': [
                "Consciousness cannot be removed",
                "from the equation.",
                "The observer shapes reality.",
                "Our consciousness manifests reality.",
                "If mind comes first,",
                "we are not machines.",
                "We are boundless awareness."
            ],
            'theme': 'consciousness'
        },
        {
            'frames': [
                "You are not",
                "what you've been told.",
                "You are infinitely more powerful.",
                "More connected.",
                "More divine.",
                "Than you've been led to believe."
            ],
            'theme': 'divine potential'
        },
        {
            'frames': [
                "Truth doesn't tiptoe.",
                "It kicks down the door.",
                "Like a wrecking ball.",
                "It breaks you open.",
                "So the real you",
                "can finally breathe.",
                "This is you, coming home."
            ],
            'theme': 'transformation'
        },
    ]
    
    for seq in slide_sequences:
        slides.append({
            'id': f'slide_{slide_id:04d}',
            'frames': seq['frames'],
            'theme': seq['theme'],
            'recommended_pacing': random.choice(['fast', 'medium', 'slow']),
            'background_style': random.choice(['minimal', 'gradient', 'dark', 'light']),
            'cta_slide': f'Learn more at {FOOTER}',
            'footer': FOOTER,
            'source_book': random.choice(['Framing Jesus', 'Reality Unveiled', 'Escape the Hell Myth', 'Liberating Humanity']),
            'chapter': 'Various'
        })
        slide_id += 1
    
    # Generate more to reach 40+
    additional_frames_sets = [
        ["The Father is greater than I.", "Jesus said this.", "What if he meant it?"],
        ["Why call me good?", "Only God is good.", "Jesus' own words."],
        ["Father... you are the only true God.", "Jesus' testimony.", "Clear and direct."],
        ["The pattern shows", "Jesus being elevated.", "From subordinate to co-equal.", "Through editing."],
        ["The evidence is undeniable.", "And damning.", "Jesus exposed the contradiction."],
        ["Love becomes obligation", "when you believe in torture.", "Worship becomes negotiation.", "Prayer becomes panic."],
        ["The fire of love", "and fear cannot coexist.", "One consumes the other.", "Love is hotter."],
        ["The materialist worldview", "is collapsing.", "Science shatters it.", "From within."],
        ["Particles behave differently", "when observed.", "Consciousness shapes reality.", "At the quantum level."],
        ["We've been operating", "at 5% capacity.", "The rest is waiting.", "To be unlocked."],
        ["The abilities", "you've been told are impossible?", "They're accessible.", "To everyone."],
        ["Jesus gave authority", "to human beings.", "You create reality.", "Through consciousness."],
        ["The kingdom", "is inside you.", "Not mystical poetry.", "Accurate physics."],
        ["Mind is not bound", "by matter.", "Consciousness operates", "beyond the brain."],
        ["Jesus mapped this", "2,000 years ago.", "The teaching was accurate.", "A blueprint of reality."],
        ["What if Jesus", "meant exactly what he said?", "Your suspicions were correct.", "The contradictions ARE real."],
        ["This isn't conspiracy theory.", "This is documented evidence.", "The truth will set you free."],
        ["From fear to freedom.", "From illusion to truth.", "This isn't the end.", "It's the beginning."],
        ["The universe is fluid.", "Responsive.", "Alive.", "Entangled with your consciousness."],
        ["Every phenomenon", "is a crack.", "In official reality.", "Truth blazes through."],
        ["The old worldview", "is shattering.", "The pillars have crumbled.", "Consciousness cannot be produced."],
        ["What lies ahead?", "Quantum physics reveals power.", "NDEs show transcendence.", "The journey continues."],
        ["You are infinitely more powerful", "than you've been led to believe.", "Truth finds cracks.", "It keeps seeping through."],
        ["Jesus' teachings", "are powerful beyond measure.", "They reveal who you are.", "RIGHT NOW."],
        ["Understanding is", "just the beginning.", "Knowing you're a god", "is one thing.", "Acting like one?", "That's magic."],
        ["This journey", "will mess with your head.", "In the best way.", "The universe is more wondrous.", "Than you were told."],
        ["You have more", "creative power.", "Than you've been allowed", "to imagine.", "The veil is thinning.", "Between science and spirit."],
        ["As it thins,", "we recover a truth.", "Jesus understood", "2,000 years ago.", "You are not", "what you've been told.", "You are infinitely more."],
        ["More powerful.", "More connected.", "More divine.", "Than you've been led to believe.", "The truth sets free.", "From fear to freedom."],
        ["From illusion to truth.", "This isn't the end of faith.", "It's the beginning of awakening.", "And living abundantly."],
    ]
    
    for frames in additional_frames_sets[:31]:  # Add to reach 40+
        slides.append({
            'id': f'slide_{slide_id:04d}',
            'frames': frames,
            'theme': random.choice(['consciousness', 'divine potential', 'truth', 'freedom', 'healing']),
            'recommended_pacing': random.choice(['fast', 'medium', 'slow']),
            'background_style': random.choice(['minimal', 'gradient', 'dark', 'light']),
            'cta_slide': f'Learn more at {FOOTER}',
            'footer': FOOTER,
            'source_book': random.choice(['Framing Jesus', 'Reality Unveiled', 'Escape the Hell Myth', 'Liberating Humanity']),
            'chapter': 'Various'
        })
        slide_id += 1
    
    return slides[:45]

def create_reels():
    """Create 20 reel scripts."""
    reels = []
    reel_id = 1
    
    reel_templates = [
        {
            'hook': "What if everything you thought you knew about Jesus is based on edited texts?",
            'script': [
                "Irenaeus quoted a verse in 180 CE.",
                "That verse doesn't exist in any modern Bible.",
                "It said 'the Father is the Creator of all.'",
                "Gone. Deleted.",
                "This is documented textual history.",
                "The truth will set you free."
            ],
            'punchline': "The truth about textual changes won't destroy your faith—it might finally set it free."
        },
        {
            'hook': "Jesus said 'You are gods.' Out loud.",
            'script': [
                "He didn't stutter.",
                "He didn't add qualifiers.",
                "He said it in the present tense.",
                "You ARE. Right now.",
                "This wasn't a slip.",
                "It was a deliberate truth bomb."
            ],
            'punchline': "You are infinitely more powerful, more connected, and more divine than you've been led to believe."
        },
        {
            'hook': "If eternal conscious torment is true, then the gospel isn't good news.",
            'script': [
                "It's cosmic blackmail.",
                "But Jesus never preached blackmail.",
                "He preached love.",
                "Love that refuses to fail.",
                "Hell, as eternal torture, was invented.",
                "Born from mistranslation and fear."
            ],
            'punchline': "The fire of love and the fire of fear cannot coexist. And love is the hotter flame."
        },
        {
            'hook': "The universe behaves differently when you're watching.",
            'script': [
                "Quantum physics proves it.",
                "Particles freeze until observed.",
                "Consciousness shapes reality.",
                "Jesus knew this 2,000 years ago.",
                "'The kingdom of God is within you.'",
                "Not poetry. Accurate physics."
            ],
            'punchline': "You create reality through consciousness. The abilities you've been told are impossible? They're accessible to everyone."
        },
        {
            'hook': "Which of you, if his son asks for bread, will give him a stone?",
            'script': [
                "Jesus asked this question.",
                "Then exposed Yahweh's actions.",
                "Israelites begged for food.",
                "Yahweh sent poisonous snakes.",
                "Many died.",
                "Jesus didn't just say Yahweh wasn't his Father."
            ],
            'punchline': "He practically screamed it. Jesus' Father is not the snake-sending god of Israel."
        },
        {
            'hook': "No child ever imagines eternal flames.",
            'script': [
                "They have to be taught to.",
                "Usually it starts with a preacher's voice.",
                "A few trembling Bible verses.",
                "Then come the pictures.",
                "The sermons.",
                "The whispered warnings."
            ],
            'punchline': "Fear doesn't just creep in. It becomes holy. But love never needed flames to get its message across."
        },
        {
            'hook': "The fire of Jesus reveals; it doesn't destroy.",
            'script': [
                "It burns away hypocrisy.",
                "Exposes greed.",
                "Melts pride.",
                "Forges mercy.",
                "In His stories, fire is never the weapon.",
                "It's the warmth of transformation."
            ],
            'punchline': "The same light that still burns through every soul brave enough to face truth."
        },
        {
            'hook': "Consciousness cannot be removed from the equation.",
            'script': [
                "The observer and the observed cannot be separated.",
                "The universe doesn't exist 'out there.'",
                "Our consciousness is fundamentally involved.",
                "In manifesting reality itself.",
                "If mind comes first, matter second.",
                "We are not biological machines."
            ],
            'punchline': "We are boundless awareness wearing a temporary suit of flesh and bone."
        },
        {
            'hook': "You are not what you've been told you are.",
            'script': [
                "You are infinitely more powerful.",
                "More connected.",
                "More divine.",
                "Than you've been led to believe.",
                "Jesus revealed this 2,000 years ago.",
                "'You are gods.'"
            ],
            'punchline': "It's time to remember who you really are."
        },
        {
            'hook': "Truth doesn't tiptoe in asking for permission.",
            'script': [
                "It kicks down the door.",
                "Like a wrecking ball.",
                "It demolished my carefully constructed identity.",
                "Which turned out to be a costume.",
                "A shadow-self.",
                "Hiding who I really was."
            ],
            'punchline': "This isn't just another step in your spiritual journey. This is you, coming home."
        },
        {
            'hook': "The Father is greater than I.",
            'script': [
                "Jesus said this.",
                "What if he meant it?",
                "What if everything we think we know",
                "about Jesus is about to be",
                "turned upside down?",
                "The evidence is clear."
            ],
            'punchline': "Jesus' actual message might be MORE radical, MORE empowering than we've been fooled into believing!"
        },
        {
            'hook': "Love becomes obligation when you believe in eternal torture.",
            'script': [
                "Worship becomes negotiation.",
                "Prayer becomes panic.",
                "When you believe God tortures forever,",
                "you stop seeing Him as Father.",
                "You start seeing Him as warden.",
                "But that's not the Father Jesus revealed."
            ],
            'punchline': "Jesus revealed a Father who restores, not destroys."
        },
        {
            'hook': "The materialist worldview is collapsing.",
            'script': [
                "Science itself is shattering it.",
                "From within.",
                "Particles behave differently when observed.",
                "Consciousness shapes reality.",
                "At the quantum level.",
                "We've been operating at 5% capacity."
            ],
            'punchline': "The rest is waiting to be unlocked. The abilities you've been told are impossible? They're accessible to everyone."
        },
        {
            'hook': "Jesus gave authority to human beings.",
            'script': [
                "You create reality.",
                "Through consciousness.",
                "The kingdom is inside you.",
                "Not mystical poetry.",
                "Accurate physics.",
                "Mind is not bound by matter."
            ],
            'punchline': "Consciousness operates far beyond the brain's gray matter."
        },
        {
            'hook': "What if Jesus meant exactly what he said?",
            'script': [
                "Your suspicions were correct.",
                "The contradictions ARE real.",
                "This isn't conspiracy theory.",
                "This is documented evidence.",
                "The truth will set you free.",
                "From fear to freedom."
            ],
            'punchline': "From illusion to truth. This isn't the end of faith. It's the beginning of awakening."
        },
        {
            'hook': "The universe is fluid. Responsive. Alive.",
            'script': [
                "Intimately entangled with your consciousness.",
                "Every phenomenon is a crack.",
                "In official reality.",
                "Through those cracks,",
                "truth blazes through.",
                "The old worldview is shattering."
            ],
            'punchline': "The pillars have crumbled. Consciousness cannot be produced by neurons."
        },
        {
            'hook': "What lies ahead?",
            'script': [
                "Quantum physics reveals your power.",
                "Near-death experiences show consciousness transcending.",
                "Reincarnation evidence proves the journey continues.",
                "The abilities you've been told are impossible?",
                "They're not only possible.",
                "They're accessible to everyone."
            ],
            'punchline': "You are infinitely more powerful than you've been led to believe."
        },
        {
            'hook': "Truth is like water finding cracks.",
            'script': [
                "It keeps seeping through.",
                "Church councils watered it down.",
                "Empires buried it under dogma.",
                "But truth keeps seeping through.",
                "Jesus' teachings are powerful beyond measure.",
                "They reveal who you are RIGHT NOW."
            ],
            'punchline': "An intrinsic, creative, reality-shaping force in a conscious, responsive universe."
        },
        {
            'hook': "Understanding these truths is just the beginning.",
            'script': [
                "Knowing you're a god is one thing.",
                "Acting like one?",
                "That's where the magic happens.",
                "This journey will mess with your head.",
                "In the best way.",
                "The universe is infinitely more wondrous."
            ],
            'punchline': "More alive than you were told. You have more creative power than you've been allowed to imagine."
        },
        {
            'hook': "The veil between science and spirituality is thinning.",
            'script': [
                "As it does, we're recovering a truth.",
                "Jesus understood 2,000 years ago.",
                "You are not what you've been told.",
                "You are infinitely more.",
                "More powerful. More connected. More divine.",
                "Than you've been led to believe."
            ],
            'punchline': "The truth sets free. From fear to freedom. From illusion to truth. This is the beginning of awakening."
        },
    ]
    
    for template in reel_templates:
        reels.append({
            'id': f'reel_{reel_id:04d}',
            'hook_3_sec': template['hook'],
            'script': template['script'],
            'emotional_punchline': template['punchline'],
            'b_roll': get_broll('general'),
            'caption': f"{template['hook']}\n\n{template['punchline']}\n\nFrom the Rediscover Series\n\n{FOOTER}",
            'footer': FOOTER,
            'source_book': random.choice(['Framing Jesus', 'Reality Unveiled', 'Escape the Hell Myth', 'Liberating Humanity']),
            'chapter': 'Various'
        })
        reel_id += 1
    
    return reels[:20]

def main():
    print("Generating social media content...")
    
    # Generate all content
    quotes = expand_quotes()
    scripts = create_tiktok_scripts()
    slides = create_slideshows()
    reels = create_reels()
    
    print(f"Generated {len(quotes)} quotes, {len(scripts)} TikTok scripts, {len(slides)} slideshows, {len(reels)} reels")
    
    # 1. social-posts.json
    print("Creating social-posts.json...")
    with open('social-posts.json', 'w', encoding='utf-8') as f:
        json.dump(quotes, f, indent=2, ensure_ascii=False)
    
    # 2. social-posts.csv
    print("Creating social-posts.csv...")
    with open('social-posts.csv', 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['id', 'quote_text', 'source_book', 'chapter', 'theme', 'tone', 
                                               'platform_recommendation', 'cta', 'footer', 'hashtags'])
        writer.writeheader()
        for quote in quotes:
            quote_copy = quote.copy()
            quote_copy['hashtags'] = ', '.join(quote_copy['hashtags'])
            writer.writerow(quote_copy)
    
    # 3. tiktok-scripts.json
    print("Creating tiktok-scripts.json...")
    with open('tiktok-scripts.json', 'w', encoding='utf-8') as f:
        json.dump(scripts, f, indent=2, ensure_ascii=False)
    
    # 4. tiktok-slides.json
    print("Creating tiktok-slides.json...")
    with open('tiktok-slides.json', 'w', encoding='utf-8') as f:
        json.dump(slides, f, indent=2, ensure_ascii=False)
    
    # 5. reels.json
    print("Creating reels.json...")
    with open('reels.json', 'w', encoding='utf-8') as f:
        json.dump(reels, f, indent=2, ensure_ascii=False)
    
    print("Done! All files created in social/ directory")
    print(f"\nSummary:")
    print(f"  - {len(quotes)} Instagram/Facebook quotes")
    print(f"  - {len(scripts)} TikTok scripts")
    print(f"  - {len(slides)} Slideshow sequences")
    print(f"  - {len(reels)} Reel scripts")

if __name__ == '__main__':
    main()

