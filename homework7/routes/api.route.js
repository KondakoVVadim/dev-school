const router = require('express').Router();
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

router.get('/product', async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({})
    res.json(products)
  } catch (error) {
    next(error)
  }
});

router.post('/products', async (req, res, next) => {
  try {
    const product = await prisma.product.create({
      data: req.body,
    })
    res.json(product)
  } catch (error) {
    next(error)
  }
});

router.delete('/orders/:id', async (req, res, next) => {
  const orderId = parseInt(req.params.id);

  await prisma.order.delete({
    where: { id: orderId },
  });

  res.status(204).end();
});

router.patch('/employees/:id', async (req, res, next) => {
  try {
    const employeeId = parseInt(req.params.id);
    const { firstName, lastName, middleName, position } = req.body;

    const updatedEmployee = await prisma.employee.update({
      where: { id: employeeId },
      data: {
        firstName,
        lastName,
        middleName,
        position,
      },
    });

    res.json(updatedEmployee);
  } catch (error) {
    next(error);
  }
});

router.get('/customers/:id/orders', async (req, res, next) => {
  try {
    const customerId = parseInt(req.params.id);

    const customerOrders = await prisma.order.findMany({
      where: { customerId },
      include: {
        employee: true,
        customer: true,
        orderItems: {
          include: {
            product: true,
          },
        },
      },
    });

    // Calculate totalCost for each order
    const ordersWithTotalCost = customerOrders.map(order => {
      const totalCost = order.orderItems.reduce((acc, orderItem) => {
        return acc + orderItem.amount * orderItem.product.price;
      }, 0) + order.deliveryCost;

      return { ...order, totalCost };
    });

    res.json(ordersWithTotalCost);
  } catch (error) {
    next(error);
  }
});


router.get('/products/:id', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

module.exports = router;



