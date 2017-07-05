export default async (req, res, next) => {
  req.checkQuery('x', 'Invalid x number').notEmpty().isInt();
  req.checkQuery('y', 'Invalid y number').notEmpty().isInt();

  const errors = await req.getValidationResult();

  if (errors.isEmpty()) {
    next();
  } else {
    res.json({ success: false, errors: errors.array() });
  }
};
