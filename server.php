<?php

$name = $_POST['user-name'];
$phone = $_POST['user-phone'];
$street = $_POST['user-street'];
$house = $_POST['user-house'];
$block = $_POST['user-block'];
$flat = $_POST['user-flat'];
$floor = $_POST['user-floor'];
$message = $_POST['message'];
$payment = $_POST['payment'];

    $disturb = $_POST['dont-disturb'];
    $disturb = isset($disturb) ? 'НЕТ' : 'ДА';

    $mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя: ' . $name . '</li>
            <li>Телефон: ' . $phone . '</li>
            <li>Улица: ' . $street . '</li>
            <li>Номер дома: ' . $house . '</li>
            <li>Корпус: ' . $block . '</li>
            <li>Квартира: ' . $flat . '</li>
            <li>Этаж: ' . $floor . '</li>
            <li>Комментарии к заказу: ' . $message . '</li>
            <li>Способ оплаты: ' . $payment . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
        </ul>
    </body>
    </html>
    ';

    $headers = "From: Администратор сайта <n0fat34me@gmail.com>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('k.blvrrr@yandex.ru', 'Заказ', $mail_message, $headers);



    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);

    ?>
