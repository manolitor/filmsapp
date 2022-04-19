import movieRoutes from './api/movie/movies-routes.js'
import regRoutes from './api/register/register-routes.mjs'
import authRoutes from './api/auth/auth-routes.mjs'
import userRoutes from './api/user/user-routes.mjs'

export function registerRoutes(app){
    app.use('/api', movieRoutes)
    app.use('/api', regRoutes)
    app.use('/api', authRoutes)
    app.use('/api', userRoutes)
}
