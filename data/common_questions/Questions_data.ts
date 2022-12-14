export default function getQuestion(category:string):questionsType[] {
    const findData = data.filter(item=>item.category===category);
    return findData;
}

interface questionsType{
    category : string
    title : string ,
    answer : string
}

let data : questionsType[]  = [
    {
        title : 'در راه آهن و هنگام سوار شدن به قطار چه مدارکی لازم است؟' ,
        category : 'train-ticket',
        answer : "شما برای ورود به قطار باید این مدارک را با خود به همراه داشته باشید: پرینت بلیط و کارت شناسایی معتبر.در صورت داشتن تخفیف جانباز یا خانواده شهدا، به همراه داشتن کارت معتبر مربوطه نیاز ضروری است" ,
    },
    {
        title : 'مقدار بار مجاز در قطار چقدر است؟' ,
        category : 'train-ticket',
        answer : 'هر مسافر می‌تواند وسایل ضروری سفر خود را همراه ببرد به شرط آن‌كه حجم آن از ابعاد 75 سانتی متر و وزن 30 كیلوگرم تجاوز نكند. به عنوان مثال مسافر می‌تواند كیف‌دستی، بسته‌ و چمدان‌های كوچك محتوی لوازم شخصی، صندلی چرخ‌دار بیمار، كالسكه بچه و قفس كوچك پرندگان ریزجثه (حداكثر در ابعاد 40 سانتی‌متر) را به همراه داشته باشد.' ,
        
    },
    {
        title : 'روال استرداد یا کنسلی بلیط قطار چگونه است؟' ,
        category : 'train-ticket',
        answer : 'برای استرداد بلیط قطار پس از زمان ذکرشده، مسافر باید تا قبل از حرکت قطار، و با ارایه بلیط چاپی و کارت شناسایی به صورت حضوری به یکی از مراکز فروش بلیط قطار مراجعه کند.' ,
        
    },
    {
        title : 'چند روز قبل از پرواز، بلیط هواپیما را بخریم؟' ,
        category : 'inFlight',
        answer : 'امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات قیمت بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود. بنابراین در صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط هواپیما را به روزهای نزدیک پرواز موکول کنید. البته اگر قصد سفر در ایام پرسفر نظیر تعطیلات را دارید، باید هر چه زودتر رزرو بلیط هواپیما را انجام دهید.' ,
      
    },
    {
        title : 'در هر پرواز، میزان بار مجاز چقدر است؟' ,
        category : 'inFlight',
        answer : 'میزان مجاز بار به کلاس پرواز و کلاس نرخی بلیط بستگی دارد. هنگام خرید آنلاین بلیط هواپیما می‌توانید میزان بار مجاز را در اطلاعات بلیط ببینید. طبیعی است که اگر میزان بارتان بیش از حد مجاز باشد، باید جریمه پرداخت کنید.' ,
        
    },
    {
        title : 'نرخ بلیط هواپیما برای نوزادان و کودکان زیر ۱۲ سال چگونه است؟' ,
        category : 'inFlight',
        answer : 'نرخ بلیط کودکان و نوزادان به کلاس پرواز و کلاس نرخی بستگی دارد. به صورت کلی، قیمت بلیط مسافر کودک (2 الی 12 سال) معادل 50 الی 100 درصد بلیط بزرگسال، و قیمت بلیط مسافر نوزاد (تا دو سال) 10 درصد بلیط بزرگسال است. هنگام تهیه بلیط هواپیما به این نکته توجه داشته باشید.' ,
        
    },
    {
        title : 'بلیط پرواز چه کشورها و ایرلاین‌هایی را می‌توانم‌ در سایت علی‌بابا جستجو و خریداری کنم؟' ,
        category : 'iranout',
        answer : 'بلیط تمام خطوط هوایی دنیا در سایت علی‌بابا موجود است، چه پروازهایی که مبدا یا مقصد آنها ایران است و چه پروازهای داخلی دورترین کشورهای دنیا. پروازهای ایرلاین‌هایی مثل لوفت‌هانزا، امارات، قطرایرویز، ترکیش‌ایر، ایرفرانس، کی‌ال‌ام، آئروفلوت، آلیتالیا، اوکراینی، ایرایژیا، پگاسوس و ده‌ها ایرلاین دیگر در علی‌بابا قابل تهیه هستند. همچنین بلیط پروازهای خارجیِ شرکت های هواپیمایی داخلی مانند ماهان، ایران‌ایر، قشم ایر، آتا و .. نیز روی سایت علی‌بابا به فروش می‌رسد.' ,
     
    },
    {
        title : 'چطور می توانم در مورد مقررات پرواز یا ویزا مربوط به سفرم اطمینان پیدا کنم؟' ,
        category : 'iranout',
        answer : 'حتما قبل از انتخاب پرواز خود در مورد مقررات پرواز و قوانین مربوط به ویزا تحقیق کنید (مثلا ممکن است مقصد سفر شما نیاز به ویزا نداشته باشد ولی برای توقفی که در مسیر دارد نیاز به ویزای ترانزیت داشته باشید). برای این کار به صفحه قوانین و مقررات پرواز خارجی مراجعه کنید و در صورتی که نیاز به اطلاعات بیشتری داشتید با پشتیبانی علی‌بابا تماس بگیرید.' ,
   
    },
    {
        title : 'آیا برای خرید بلیط ایرلاین‌های خارجی، نیازی به کردیت‌کارت یا روش‌های پرداخت ارزی خواهم داشت؟' ,
        category : 'iranout',
        answer : 'به هیچ وجه. شما هزینه‌ بلیط را به صورت ریالی و با کارت‌های شتابی که در دست دارید، تنها با داشتن رمز دوم کارت پرداخت می کنید و بلیط شما بلافاصله صادر خواهد شد و قابل استفاده خواهد بود.' ,
     
    },
    {
        title : 'آیا خرید بلیط اتوبوس برای کودکان و اطفال زیر ۲ سال الزامی است؟' ,
        category : 'bus-ticket',
        answer : 'قیمت بلیط اتوبوس برای کودکان زیر دو سال، در صورتی که صندلی‌ به آن‌ها تعلق نگیرد رایگان است. اگر کودک به استفاده از صندلی نیاز داشته باشد، باید هزینه کامل بلیط اتوبوس را برایش پرداخت کنید تا صندلی متعلق به خودتان باشد.' ,
     
    },
    {
        title : 'نحوه رزرو بلیط اتوبوس در علی بابا چگونه است؟' ,
        category : 'bus-ticket',
        answer : 'برای خرید اینترنتی بلیط اتوبوس در وب‌سایت یا اپلیکیشن علی‌بابا (بخش بلیط اتوبوس) مبدا، مقصد، تاریخ حرکت و تعداد بلیط خود را انتخاب می‌کنید. سپس می‌توانید بلیط‌های موجود را در تاریخ مدنظرتان ببینید و با کارت بانکی و رمز دوم، بلیط دلخواهتان را بخرید.برای مطالعه راهنمای گام‌به‌گام و تصویری خرید اینترنتی بلیط اتوبوس، می‌توانید سری به اینجا بزنید.' ,
     
    },
    {
        title : 'استعلام بلیط اتوبوس علی‌بابا چگونه است؟' ,
        category : 'bus-ticket',
        answer : 'برای استعلام بلیط اتوبوس، کافی است به وب‌سایت یا اپلیکیشن علی‌بابا بروید و بعد از مشخص‌کردن مبدا و مقصد، لیست کامل اتوبوس‌های شرکت‌های مختلف را ببینید.بعد از خرید، اگر بخواهید جزئیات بلیط را ببینید، وارد حساب کاربری‌تان شوید و روی گزینه «سفرهای من» بزنید.' ,
     
    },
]