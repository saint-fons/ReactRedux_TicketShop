# TASK 2 - React Redux(NevaTrip App)

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
#### IX. После активации переключателя, появляется возможность выбрать время обратного пути не позднее даты отправления.

![img.png](src/Style/IMG/wayBackPicked.png)

#### X. Поле "Select the number of tickets" - выбор количества билетов. Имеет валидацию; только положительные натуральные числа
#### XI. На сером фоне представлен результат выбора пользователя. Конечная цена будет зависеть от количества выбранных билетов и обратного билета

![img.png](src/Style/IMG/price1.png)
![img.png](src/Style/IMG/priceWithWayBack.png)

#### XII. В файле /src/Redux/Ticket-selector в селекторе "getWayBackSuperSelector" сравнивается дата отплытия из одного пункта и выбирается дата убытия из второго. Данные в формате new Date(), прибавляя время в пути(например, 50 минут) можно сделать выборку обратного рейса позднее выбранной даты на 50 минут.


#### XIII. Время в пути: state.TicketPage.datePicked.timeToVisit + state.TicketPage.datePicked.timeToWayBack + 50 минут - время в пути

#### XIV. Местное время: state.TicketPage.location.timezone - хранится время пользователя в его текущем регионе.



## Структура приложения;
* /src/API содержит файл для обращения к серверу
* /Components/Forms компонента для ввода и отображения данных. Содержит файл стилей формы
* /Components/Map компонента карты. В нее передаются данные о широте и долготе для отображения маркера на карте
* /Redux файл Ticket-reducer содержит редюсер состояния приложения
* /Style/IMG картинки для readme/md
* /Style/style.scss препроцессор глобальных стилей

# TASK 1 - SQL

#### Для новой таблицы, новый поля;

* discount_ticket_price - цена уцененного билета
* discount_ticket_quantity - количество уцененных билетов
* group_ticket_price - количество уцененных билетов
* group_ticket_quantity - количество уцененных билетов

![img.png](src/Style/IMG/table1.png)

#### Для новой таблицы, новый поля; групповой, групповой цена, уцененный, уцененный цена

* ticket_id - айди нового билета
* ticket_format - формат билета (уцененный/групповой/детский)
* ticket_format - дата покупки
* barcode - индивидуальный баркод для каждого билета
* created - дата создания таблицы

![img.png](src/Style/IMG/table.png)

























