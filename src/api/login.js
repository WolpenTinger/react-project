import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  // Получите данные пользователя из запроса
  const { email, password } = req.body;

  // Проверьте данные пользователя и выполните аутентификацию
  const user = await getUserByEmail(email);
  if (!user) {
    return res.status(401).json({ message: 'Неверные учетные данные' });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ message: 'Неверные учетные данные' });
  }

  // Создайте JWT для пользователя
  const token = jwt.sign({ userId: user.id }, 'mysecretkey');

  // Отправьте JWT в ответе
  res.status(200).json({ token });
}
