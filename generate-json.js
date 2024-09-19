const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://torthiwfsqwzbcveiimx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvcnRoaXdmc3F3emJjdmVpaW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5MDkxODUsImV4cCI6MjAxMTQ4NTE4NX0.9FnyfQPJQ5puR_MQnK7RvwiBeuYy7DNjBZcVH1y3eOI';
const supabase = createClient(supabaseUrl, supabaseKey);

async function generation(lan,key) {
    const { data, error } = await supabase
        .from('system_language')
        .select('id, name,'+[lan])
        .eq('name', [key]);

    if (error) {
        // console.error(error);
        return null;
    }
    if (data && data.length > 0) {
        const jsonContent = {
            "h1": "A simple example",
            "change-locale": "Change locale to \"{{changeTo}}\"",
            "to-second-page": "To second page",
            "to-auto-static-page": "To auto static page (en)",
            "error-with-status": "A {{statusCode}} error occurred on server",
            "error-without-status": "An error occurred on the server",
            "title": "Home | next-i18next",
            "blog": {
                "appDir": {
                    [lan]: data[0][lan],  
                    "id": data[0].id,
                    "name": data[0].name,
                },
                "optimized": {
                    "question": "Do you like to unleash some super powers to have all side optimized translations?",
                    "answer": "Then you may have a look at <1>this blog post</1>.",
                    "link": "https://locize.com/blog/next-i18next/"
                },
                "ssg": {
                    "question": "Do you want to use SSG (next export)?",
                    "answer": "Then you may have a look at <1>this blog post</1>.",
                    "link": "https://locize.com/blog/next-i18n-static/"
                }
            }
        };
        
    }
}
let key='sms_confirm'
generation('ru',[key]);
generation('uz',[key]);
generation('en',[key]);