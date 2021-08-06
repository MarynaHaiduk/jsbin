var date = new Date(); // получаем текущую дату
var time = date.getHours(); // получаем текущее время в часах
if(time < 13) // сравниваем время с число 13
    alert('Доброе утро!'); // если время меньше 13
else
    alert('Добрый вечер!'); // если время равно 13 и больше


SELECT code, AVG(govt_debt)
FROM countries
WHERE year >= 2016
GROUP BY code
HAVING gdp_per_capita >= 40000
LIMIT 3

CREATE TABLE countries (
code CHAR(2) NOT NULL,
year INT NOT NULL,
gdp_per_capita DECIMAL(10, 2) NOT NULL,
govt_debt DECIMAL(10, 2) NOT NULL
)

Please write the SQL statement to show the top 3 average government debts in percent of the
gdp_per_capita for those countries of which gdp_per_capita was over 40,000 dollars in every year in the
last four years.