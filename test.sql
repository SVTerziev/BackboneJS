SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Структура на таблица `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `startDate` varchar(10) NOT NULL,
  `endDate` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Схема на данните от таблица `events`
--

INSERT INTO `events` (`id`, `title`, `link`, `startDate`, `endDate`) VALUES
(1, 'Multi-Day Event', 'http://google.bg', '2016-04-22', '2016-05-03'),
(2, 'Multi-Day Event', 'http://google.bg', '2016-04-10', '');

-- --------------------------------------------------------

--
-- Структура на таблица `friends`
--

CREATE TABLE `friends` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Схема на данните от таблица `friends`
--

INSERT INTO `friends` (`id`, `title`, `link`, `image`, `text`) VALUES
(1, 'iRun Радост в движение', 'http://www.iRun.bg', 'http://spasitelbg.com/uploads/link/irun.png', 'iRun.bg е платформа за <strong>спортни</strong> мероприятия от нов тип. Нашата цел и амбиция е да популяризираме бягането, както и други спортове, и да привлечем нови съмишленици, хора, които искат да спортуват и да живеят по-здравословно. Ние организираме бягания по различни трасета и дистанции, и помагаме на наши партньори и спортни клубове да популяризират дейността си. За нашата дейност сме разработили уникална техническа система за отчитане на резултатите, както и настоящия информационен уеб портал.<br><br>\niRun.bg е идеен проект на Bioland BG, стартирал през 2014-та година, но идеята датира доста по-отдавна. Организаторите наiRun.bg имат амбицията да подпомогнат глобалната тенденция на развитие на спорта и здравословния начин на живот, като развиват спортна дейност в България и най-вече във Варненски регион.'),
(2, 'Diving club Delphin', 'http://www.svkd.bvpa.bg', 'http://spasitelbg.com/uploads/link/divingclubdolphin.png', '<p>Сдружение “ Водолазен клуб Делфин “ е <strong>неправителствена </strong>организация, създадена да популяризира, промотира и насърчава водолазното дело като природосъобразен, здравословен, удобен и приятен начин за прекарване на свободното време във водните площи, и да демонстрира как водолазите могат успешно да участват в събития от социален характер.</p>'),
(3, 'Kilo Papa', 'http://www.kilo-papa.com', 'http://spasitelbg.com/uploads/link/kilopapa.png', 'Kilo Papa Tactical - Курсове за боравене с оръжие, самозащита и точна стрелба. Медицински курсове- до лекарска помощ в динамична среда. Тестване надеждността на оборудване и екипировка от<br>всякакъв вид, във всякакви условия.'),
(4, 'Българска военнополицейска асоциация', 'http://www.bvpa.bg', 'http://spasitelbg.com/uploads/link/bvpa.png', 'Сдружение „Българска военнополицейска асоциация” е неправителствена и доброволна организация на симпатизанти, бивши и настоящи служители на Служба „Военна полиция“, обединяваща физически и юридически лица на основата на професионалния интерес на членовете и за укрепване и подпомагане на отбранителните способности на Република България и военнопатриотичното възпитание и подготовка на населението и младежта.'),
(5, 'VICTORINOX', 'http://www.wenger.bg', 'http://spasitelbg.com/uploads/link/victorinox.png', 'Всеки член от Сдружение "Съюз на Българските Спасители" може да закупи продукти на 20% отстъпка от световно известната марка VICTORINOX'),
(6, 'CAMOUFLAGEBG', 'http://www.camouflage.bg', 'http://spasitelbg.com/uploads/link/camouflagebg.png', '<p>Членове на Сдружение Съюз на Българските Спасители ще закупуват продукти от магазина CAMOUFLAGEBG на отстъпки от 10 до 15% като при пазаруването на място трябва да се легитимират с членска карта и значка, а ако поръчката на продукт/и бъде онлайн то, като емайл адрес посочвате служебния, който завършва на ...@spasitelbg.com плюс име и фамилия и специалния номер от членската си карта.</p>'),
(7, 'Прогрес и Знание', 'http://www.progressiznanie.com', 'http://spasitelbg.com/uploads/link/progressiznanie.png', 'Центъра за професионално обучение „Прогрес и Знание” е лицензиран към НАПОО с Лицензия № 2012121008 Издадена за извършване на професионални обучения.\r\nЦентъра за професионално обучение "ПРОГРЕС И ЗНАНИЕ" е лицензиран за провеждане на обучение по специалносите: парамедик, болногледач, здравен асистент и др. ');

-- --------------------------------------------------------

--
-- Структура на таблица `lectures`
--

CREATE TABLE `lectures` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `text` mediumtext NOT NULL,
  `date` int(11) NOT NULL,
  `views` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Схема на данните от таблица `lectures`
--

INSERT INTO `lectures` (`id`, `title`, `image`, `text`, `date`, `views`) VALUES
(1, 'someRandom', 'http://placehold.it/100/100', 'Какво е Lorem Ipsum?\nLorem Ipsum е елементарен примерен текст, използван в печатарската и типографската индустрия. Lorem Ipsum е индустриален стандарт от около 1500 година, когато неизвестен печатар взема няколко печатарски букви и ги разбърква, за да напечата с тях книга с примерни шрифтове. Този начин не само е оцелял повече от 5 века, но е навлязъл и в публикуването на електронни издания като е запазен почти без промяна. Популяризиран е през 60те години на 20ти век със издаването на Letraset листи, съдържащи Lorem Ipsum пасажи, популярен е и в наши дни във софтуер за печатни издания като Aldus PageMaker, който включва различни версии на Lorem Ipsum.', 12312321, 8),
(2, 'Лекция тест', 'http://placehold.it/200/150', 'Какво е Lorem Ipsum?\nLorem Ipsum е елементарен примерен текст, използван в печатарската и типографската индустрия. Lorem Ipsum е индустриален стандарт от около 1500 година, когато неизвестен печатар взема няколко печатарски букви и ги разбърква, за да напечата с тях книга с примерни шрифтове. Този начин не само е оцелял повече от 5 века, но е навлязъл и в публикуването на електронни издания като е запазен почти без промяна. Популяризиран е през 60те години на 20ти век със издаването на Letraset листи, съдържащи Lorem Ipsum пасажи, популярен е и в наши дни във софтуер за печатни издания като Aldus PageMaker, който включва различни версии на Lorem Ipsum.', 12312321, 5);

-- --------------------------------------------------------

--
-- Структура на таблица `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `parent` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Схема на данните от таблица `menu`
--

INSERT INTO `menu` (`id`, `name`, `link`, `parent`) VALUES
(1, 'Новини', '/news', 0),
(5, 'Лекции', '/lectures', 0),
(6, 'Приятели', '/friends', 0);

-- --------------------------------------------------------

--
-- Структура на таблица `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `date` int(11) NOT NULL,
  `views` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Схема на данните от таблица `news`
--

INSERT INTO `news` (`id`, `title`, `image`, `text`, `date`, `views`) VALUES
(1, 'СБС партньор на 21-ви Балкански младежки фестивал', 'http://spasitelbg.com/uploads/new/thumb/2_1472556887_y54zv.png', '<p>Традицията продължава и Балкански <strong>младежки </strong><sup>фестивал </sup><span style="background-color: rgb(255, 255, 0);">отново </span>е в град Сандански.</p><p>Всичко идва и си отива, но някои неща остават с нас завинаги. Ето ни отново за 21ви път, приканвайки всички Вас, приятели и фенове на фестивала. Каним ви, да се присъедините към нас, в дните на 21-то издание на БАЛКАНСКИ МЛАДЕЖКИ ФЕСТИВАЛ, в гр.Сандански, с участито на впечатляващи изпълнители, невероятни танцьори и творци. Не пропускайте възможността, да бъдете част от най-голямото международно младежко събитие в Югоизточна Европа, а именно Балкански младежки фестивал. Представяме Ви фестивалната програма, за да не пропуснете нито едно от невероятните събития: 7 СЕПТЕМВРИ – СРЯДА 17:30 - Барабанен кръг - пл. "България" 18:30 – Фестивално дефиле - пл. “България” – централна паркова алея 19:30 – Откриване на 21-ви БМФ – Летен театър 8 СЕПТЕМВРИ – ЧЕТВЪРТЪК 11:00 – Откриване на изложба "Жега, Жажда, Живот" - КАФЕ БАР АЙСБЕРГ 17:00 – Сцена за съвременни улични изкуства: графити, работилници за съвременни танци, временни татуси и бижута – Централна паркова алея 18:00 – Сцена за традиционни изкуства - пл. “България” 20:00 – Фестивална програма и сцена ‘YES – Youth European Stage!'' – Летен театър 23:00 – Балканско младежко парти – Музикален клуб 9 СЕПТЕМВРИ – ПЕТЪК 10:30 – Надпяване и надиграване - Мелник 19:00 – Фестивална програма, Sintica: Традиции и перспективи и Конкурс зафестивална фолклорна двойка - пл. “България” 10 СЕПТЕМВРИ – СЪБОТА 17:00 – Сцена за съвременни улични изкуства: Брейк битка Магия, графити, работилници за временни татуси и бижута – Централна паркова алея 18:00 – Сцена за традиционни изкуства - пл. “България” 20:00 – Фестивална програма и сцена ‘YES – Youth European Stage!’ – Летен театър 11 СЕПТЕМВРИ – НЕДЕЛЯ 11:00 - Екохепънинг „Less is more” - пл. “България” 19:30 – Закриване на 21 - ви БМФ - Пл. “България” 12 септември– понеделник 10:00 – Изпращане на участниците - Пл. “България” Последните четири години Съюз на българските спасители беше неразделна част, като партньор на БМФ. СБС доказа качество и отношение на организаторите, участниците и гостите. Както последните години така и тази СБС ще се грижи за сигурността на всички присъстващи на събитието.</p>', 1473518069, 27),
(2, 'Медали на СБС', 'http://spasitelbg.com/uploads/new/thumb/2_1472236209_rfl9v.png', 'От 20.02.2015 година беше взето <strong>единодушно</strong> решение от Управителния съвет на Съюз на българските спасители за вписване на "Облаги, почести и награди" във Вътрешния ред на организацията. Как можете да получите облаги, почести и награди са описани във вътрешния ред, а то следва:\n \nЧл.81. Всеки член може да се възползва от облагите на сдружението.\nЧл.82. Всеки член ще бъдат облагодетстван с почести и награди по заслуги.\nЧл.83. Всеки член или гражданин може да получи грамота, почетен знак или медал от Сдружение „Съюз на Българските Спасители” по заслуги.\nЧл.83.ал.1. Държавни служители да се награждават с грамота, медал или почетен знак по заслуги извън служебните си задължения при извършване на доброволческа дейност.\nЧл.84. Медал „Храброст“– геройство, при което няма пряко застрашаване на личния живот; даденото пострадало лице трябва да потвърди правността на случката.\nЧл.85. Медал „Герой“ – геройство, при което има пряко застрашаване на личния живот; свидетелите трябва да потвърдят действията на лицето в зависимост от ситуацията.\nЧл.86. Отличие „Спасител на годината” – спасител на годината се избира от Управителния съвет, чрез предлагане и гласуване с вдигане на ръка и събиране на гласове 2/3 от присъстващите.\nМедалите са по идея на председателя на СБС г-н Костадин Карамитов, дизайнър Христофор Минев', 1473518137, 17),
(3, 'Title', 'http://placehold.it/400/500', '<p>Традицията продължава и Балкански младежки фестивал отново е в град Сандански. Всичко идва и си отива, но някои неща остават с нас завинаги. Ето ни отново за 21ви път, приканвайки всички Вас, приятели и фенове на фестивала. Каним ви, да се присъедините към нас, в дните на 21-то издание на БАЛКАНСКИ МЛАДЕЖКИ ФЕСТИВАЛ, в гр.Сандански, с участито на впечатляващи изпълнители, невероятни танцьори и творци. Не пропускайте възможността, да бъдете част от най-голямото международно младежко събитие в Югоизточна Европа, а именно Балкански младежки фестивал. Представяме Ви фестивалната програма, за да не пропуснете нито едно от невероятните събития: 7 СЕПТЕМВРИ – СРЯДА 17:30 - Барабанен кръг - пл. "България" 18:30 – Фестивално дефиле - пл. “България” – централна паркова алея 19:30 – Откриване на 21-ви БМФ – Летен театър</p>', 1473518069, 3),
(4, 'Title', 'http://placehold.it/100/100', 'Традицията продължава и Балкански младежки фестивал отново е в град Сандански.\r\nВсичко идва и си отива, но някои неща остават с нас завинаги. Ето ни отново за 21ви път, приканвайки всички Вас, приятели и фенове на фестивала. Каним ви, да се присъедините към нас, в дните на 21-то издание на БАЛКАНСКИ МЛАДЕЖКИ ФЕСТИВАЛ, в гр.Сандански, с участито на впечатляващи изпълнители, невероятни танцьори и творци. Не пропускайте възможността, да бъдете част от най-голямото международно младежко събитие в Югоизточна Европа, а именно Балкански младежки фестивал. Представяме Ви фестивалната програма, за да не пропуснете нито едно от невероятните събития:\r\n7 СЕПТЕМВРИ – СРЯДА\r\n17:30 - Барабанен кръг - пл. "България"\r\n18:30 – Фестивално дефиле - пл. “България” – централна паркова алея\r\n19:30 – Откриване на 21-ви БМФ – Летен театър', 1473518069, 3),
(5, 'Title', 'http://placehold.it/100/100', 'Традицията продължава и Балкански младежки фестивал отново е в град Сандански.\r\nВсичко идва и си отива, но някои неща остават с нас завинаги. Ето ни отново за 21ви път, приканвайки всички Вас, приятели и фенове на фестивала. Каним ви, да се присъедините към нас, в дните на 21-то издание на БАЛКАНСКИ МЛАДЕЖКИ ФЕСТИВАЛ, в гр.Сандански, с участито на впечатляващи изпълнители, невероятни танцьори и творци. Не пропускайте възможността, да бъдете част от най-голямото международно младежко събитие в Югоизточна Европа, а именно Балкански младежки фестивал. Представяме Ви фестивалната програма, за да не пропуснете нито едно от невероятните събития:\r\n7 СЕПТЕМВРИ – СРЯДА\r\n17:30 - Барабанен кръг - пл. "България"\r\n18:30 – Фестивално дефиле - пл. “България” – централна паркова алея\r\n19:30 – Откриване на 21-ви БМФ – Летен театър', 1473518069, 3),
(6, 'Title', 'http://placehold.it/100/100', 'Традицията продължава и Балкански младежки фестивал отново е в град Сандански.\r\nВсичко идва и си отива, но някои неща остават с нас завинаги. Ето ни отново за 21ви път, приканвайки всички Вас, приятели и фенове на фестивала. Каним ви, да се присъедините към нас, в дните на 21-то издание на БАЛКАНСКИ МЛАДЕЖКИ ФЕСТИВАЛ, в гр.Сандански, с участито на впечатляващи изпълнители, невероятни танцьори и творци. Не пропускайте възможността, да бъдете част от най-голямото международно младежко събитие в Югоизточна Европа, а именно Балкански младежки фестивал. Представяме Ви фестивалната програма, за да не пропуснете нито едно от невероятните събития:\r\n7 СЕПТЕМВРИ – СРЯДА\r\n17:30 - Барабанен кръг - пл. "България"\r\n18:30 – Фестивално дефиле - пл. “България” – централна паркова алея\r\n19:30 – Откриване на 21-ви БМФ – Летен театър', 1473518069, 4),
(7, 'Title', 'http://placehold.it/100/100', 'Традицията продължава и Балкански младежки фестивал отново е в град Сандански.\r\nВсичко идва и си отива, но някои неща остават с нас завинаги. Ето ни отново за 21ви път, приканвайки всички Вас, приятели и фенове на фестивала. Каним ви, да се присъедините към нас, в дните на 21-то издание на БАЛКАНСКИ МЛАДЕЖКИ ФЕСТИВАЛ, в гр.Сандански, с участито на впечатляващи изпълнители, невероятни танцьори и творци. Не пропускайте възможността, да бъдете част от най-голямото международно младежко събитие в Югоизточна Европа, а именно Балкански младежки фестивал. Представяме Ви фестивалната програма, за да не пропуснете нито едно от невероятните събития:\r\n7 СЕПТЕМВРИ – СРЯДА\r\n17:30 - Барабанен кръг - пл. "България"\r\n18:30 – Фестивално дефиле - пл. “България” – централна паркова алея\r\n19:30 – Откриване на 21-ви БМФ – Летен театър', 1473518069, 3),
(9, 'title', 'http://placehold.it/200/200', 'text', 12312321, 3),
(10, 'title', 'http://placehold.it/200/200', 'text', 12312321, 4),
(11, 'title', 'http://placehold.it/200/200', 'text', 12312321, 3),
(12, 'title', 'http://placehold.it/200/200', 'text', 12312321, 5),
(13, 'title', 'http://placehold.it/200/200', 'text', 12312321, 3),
(14, 'title', 'http://placehold.it/200/200', 'text', 12312321, 3),
(15, 'Zaglavie', 'http://placehold.it/200/200', 'Zaglavie text', 1232124, 0);

-- --------------------------------------------------------

--
-- Структура на таблица `pages`
--

CREATE TABLE `pages` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `text` mediumtext NOT NULL,
  `date` int(11) NOT NULL,
  `views` int(11) NOT NULL DEFAULT '0',
  `link` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Схема на данните от таблица `pages`
--

INSERT INTO `pages` (`id`, `title`, `image`, `text`, `date`, `views`, `link`) VALUES
(1, 'Спасители', '', 'Спасителите са ...', 12312321, 20, '/spasiteli'),
(3, 'Нова страница', 'http://placekitten.com/400/400', '<p>Нов текстz</p>', 12312321, 7, '/test');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lectures`
--
ALTER TABLE `lectures`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `friends`
--
ALTER TABLE `friends`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `lectures`
--
ALTER TABLE `lectures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
