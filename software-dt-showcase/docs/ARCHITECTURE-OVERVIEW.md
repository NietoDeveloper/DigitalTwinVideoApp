# Visión general de arquitectura (nivel alto)

Este documento describe el producto **a nivel conceptual**, para dar contexto técnico a un evaluador sin exponer implementación real.

## Enfoque general

Software DT sigue un patrón **cliente/servidor desacoplado**: una aplicación pública orientada al usuario final (agendamiento, contacto, pagos) y un panel administrativo separado para operación interna, comunicados a través de una capa de servicios propia.

```
[ Aplicación pública ]        [ Panel administrativo ]
        │                              │
        └──────────► [ Capa de servicios ] ◄──────────┘
                              │
                     [ Persistencia de datos ]
```

## Capacidades del producto (conceptual)

- **Front-end público:** flujo de agendamiento/contacto orientado a conversión.
- **Panel administrativo:** operación en tiempo real — trabajos, ventas, mensajería, catálogo, KPIs.
- **Pagos:** integración con pasarela de pago para cobro de servicios.
- **Mensajería:** canales separados por origen (solicitud vs. contacto general), con indicadores de confirmación automática.
- **Infraestructura:** despliegue containerizado en la nube, con separación entre entorno de desarrollo y producción.

## Qué queda fuera intencionalmente

- Proveedores específicos de infraestructura, nombres de servicios internos, esquemas de base de datos.
- Lógica de autenticación y control de acceso real.
- Cualquier detalle que permita reproducir el sistema sin pasar por una licencia o acceso autorizado.

Para profundizar en la arquitectura real, ver las modalidades de acceso en [`COMMERCIAL.md`](./COMMERCIAL.md).
