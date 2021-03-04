# TASK 2 - React + Redux

Веб версия приложения: [live version](https://react-redux-ticket-shop-git-master-saint-fons.vercel.app/)


## Для запуска
* npm install / yarn install
* npm start / yarn start
* npm build / yarn build
## Использованы технологии; 
#### React, Redux, HTML, JS, CSS, Final-Form, LeafLetJS(API), GeoIpiFy(API), SASS/SCSS, ThunkCreator, Compose, Reselect, Axios, Styled-Components

#### I. Для представления данных из Redux используется компонента ShopContainer
#### II. Во время монтирования ShopContainer вызывается getAddress() и инициирует обращение к API GeoIpiFy
#### III. API GeoIpiFy без указания конкретного IP адреса возвращает информацию по адресу с которого идет запрос. Так мы узнаем, где сейчас пользователь и какой у него часовой пояс 

![img.png](src/Style/IMG/geoipify.png)

#### IV. В примере ниже данные при использовании VPN

![img.png](src/Style/IMG/redux_state.png)


#### V. Данные из ShopContainer пробрасываются в компоненту Shop, которая возвращает компоненты NewForm(Форма в header), ShopMetaData(Панель с информацией о пользователе), Map(Footer с картой местонахождения пользователя)

![img.png](src/Style/IMG/mane_page.png)


#### VI. Форма ввода города назначения имеет валидацию. Только город A или B(Анг.). "Required", если фокус пропал, а города нет.

![img.png](src/Style/IMG/Required.png)
![img.png](src/Style/IMG/pick_city.png)


#### VI. Поле: Pick a Time. Не содержит данных, пока не выбран город A или B. После ввода города время отправления будет разным для A и для B.


![img.png](src/Style/IMG/cityAPicked.png)

#### VII. Поле: Pick a Time. Не содержит данных, пока не выбран город A или B. После ввода города время отправления будет разным для A и для B.

![img.png](src/Style/IMG/cityBPicked.png)

#### VIII. Переключатель: "Return?". Отмечается, если нужен обратный билет. Повлияет на конечную цену билета.
#### IX. Время в пути составляет 50 минут. После выбора потребности в обратном билете, будут предложены даты с лагом в 50 минут

![img.png](src/Style/IMG/wayBackPicked.png)
![img.png](src/Style/IMG/wayBackPicked1.png)

#### X. Поле "Select the number of tickets" - выбор количества билетов. Имеет валидацию; только положительные натуральные числа
#### XI. На сером фоне представлен результат выбора пользователя. Конечная цена будет зависеть от количества выбранных билетов и обратного билета

![img.png](src/Style/IMG/price1.png)
![img.png](src/Style/IMG/price0.png)
#### XI. Время в пути одинаково в обе стороны и составит 50 минут. Если был выбран обратный билет, то отобразится полное время в пути
![img.png](src/Style/IMG/priceWithWayBack.png)

![img.png](src/Style/IMG/wayBackPicked3.png)

#### XII. Для пользователей из разных стран предусмотрен перевод в текущий часовой пояс. Пример IP адреса для МСК, СПБ

![img.png](src/Style/IMG/timezone1.png)

#### XII. Пример для Нью-Йорка. Разница с МСК, СПБ -8 часов

![img.png](src/Style/IMG/timezone2.png)

#### XIII. Пример для Амстердама. Разница с МСК, СПБ -2 часа

![img.png](src/Style/IMG/timezone3.png)

#### XIII. Пример для Сингапура. Разница с МСК, СПБ + 5 часов

![img.png](src/Style/IMG/timezone4.png)


## Структура приложения;
* /src/API содержит файл для обращения к серверу
* /Components/Forms компонента для ввода и отображения данных. Содержит файл стилей формы
* /Components/Map компонента карты. В нее передаются данные о широте и долготе для отображения маркера на карте
* /Redux файл Ticket-reducer содержит редюсер состояния приложения
* /Style/IMG картинки для readme/md
* /Style/style.scss препроцессор глобальных стилей

# TASK 1 - SQL

#### Для новой таблицы;

* discount_ticket_price - цена уцененного билета
* discount_ticket_quantity - количество уцененных билетов
* group_ticket_price - количество уцененных билетов
* group_ticket_quantity - количество уцененных билетов

![img.png](src/Style/IMG/table1.png)

#### Для новой таблицы;

* ticket_id - айди нового билета
* ticket_format - формат билета (уцененный/групповой/детский)
* ticket_format - дата покупки
* barcode - индивидуальный баркод для каждого билета
* created - дата создания таблицы

![img.png](src/Style/IMG/table.png)

























