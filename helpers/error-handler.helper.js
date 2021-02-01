export async function handleErrorMiddleware(ctx, next) {
  try {
    await next();
  } catch (error) {
    ctx.status = error.status;
    ctx.body = error.message;
  }
}
