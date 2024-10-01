import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  const swaggerConfig = new DocumentBuilder()
    .setTitle('GymVictor')
    .setDescription(
      'Esta es una API REST para GymVictor. En primera instancia se utiliza para tener control de pagos de clientes que entran al gym',
    )
    .addBearerAuth()
    .setVersion('1.0')
    .build();

  //creo el documento. le asigno la ruta "api"
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('doc', app, document, {
    swaggerOptions: {
      //docExpansion: 'none', // This ensures all tags start collapsed
    },
  });
  await app.listen(3000);
}
bootstrap();
