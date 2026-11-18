# Notas Combinadores CSS

## Operador +, virgulilla y radios

> Usamos inputs de radio para esta tarea

Para los botones de radio deben de coincidir el name en todos los inputs; y el id debe de ser identico al atributo for de cada label

> Usamos display:none en todas las etiquetas p para ocultar los parrafos inicialmente, cuando se pinche un radio que podamos ver sus responsabilidades

### Mostrar responsabilidades cuando se seleccione un checkbox

Usamos el +, es la relacion hermano siguiente

> Con los corchetes podemos especificar alguna caracteristica concreta de una etiqueta que queremos editar

- Usamos input[type=radio], p para seleccionar los parrafos cuyo input sea de tipo radio
- Pseudoclase :checked para seleccionar los inputs anteriores que han sido seleccionados (marcados)

> Entre el input y el p hay una relacion de hermano siguiente / hermano abyacente (operador + )

Muestra los parrafos que sean _primer hermano_ de un radio que este _marcado_

### Mostrar varias responsabilidades a la vez

Usamos la virgulilla (~), afecta a los hermanos posteriores pero no a los anteriores

### Que solo este subrayado el label que este marcado

Usamos la pseudoclase :has(+input[type=radio]:checked), no hace falta escribir tanto pero el profesor lo ha puesto asi.

Se lee asi:

Subraya los label que tengan un primer hermano que sea una etiqueta input de tipo radio y ademas marcada

>Si mueves las etiquetas de manera diferente a como estan actualmente en el index ya no funcionaria

