<template>
  <v-layout >

    <v-row>
      <v-col>
        <v-card
            outlined
        >
          <v-card-title class="justify-center">
            Проекты
          </v-card-title>


          <v-card-text>

            <v-text-field
                label="Добавить проект"
                outlined
                dense
            ></v-text-field>




            <h3 class="title-project mb-2 mt-1">Какой то новый проект</h3>
            <span>+ Добавить задачу</span>





            <v-list-item class="todo-item">
              <v-list-item-action>
                <v-radio></v-radio>
              </v-list-item-action>
              <v-list-item-content>
                <div>Какая-то рандомная задача 1</div>
              </v-list-item-content>

              <span class="todo-calendar">Сегодня</span>
              <v-list-item-action>
                <span>x</span>
              </v-list-item-action>

            </v-list-item>




            <v-list-item class="todo-item">
              <v-list-item-action>
                <v-radio></v-radio>
              </v-list-item-action>
              <v-list-item-content>
                <div>Какая-то рандомная задача 1</div>
              </v-list-item-content>

              <span class="todo-calendar">Сегодня</span>
              <v-list-item-action>
                <span>x</span>
              </v-list-item-action>

            </v-list-item>



            <!--            <v-row>-->
            <!--              <v-col cols="1" class="pb-0 pt-0"></v-col>-->
            <!--              <v-col cols="10" class="pb-0 pt-0">-->
            <!--                <v-text-field-->
            <!--                    label="Новая задача"-->
            <!--                    dense-->
            <!--                ></v-text-field>-->

            <!--              </v-col>-->
            <!--            </v-row>-->



            <h3 class="title-project mb-2 mt-4">Какой то новый проект</h3>
            <span>+ Добавить задачу</span>



            <v-list-item class="todo-item">
              <v-list-item-action>
                <v-radio></v-radio>
              </v-list-item-action>
              <v-list-item-content>
                <div>Какая-то рандомная задача 1</div>
              </v-list-item-content>

              <span class="todo-calendar">Сегодня</span>
              <v-list-item-action>
                <span>x</span>
              </v-list-item-action>

            </v-list-item>


            <v-list-item class="todo-item">
              <v-list-item-action>
                <v-radio></v-radio>
              </v-list-item-action>
              <v-list-item-content>
                <div>Какая-то рандомная задача 1</div>
              </v-list-item-content>

              <span class="todo-calendar">Сегодня</span>
              <v-list-item-action>
                <span>x</span>
              </v-list-item-action>

            </v-list-item>

            <!--            <v-row>-->
            <!--              <v-col cols="1" class="pb-0 pt-0"></v-col>-->
            <!--              <v-col cols="10" class="pb-0 pt-0">-->
            <!--                <v-text-field-->
            <!--                    label="Новая задача"-->
            <!--                    dense-->
            <!--                ></v-text-field>-->

            <!--              </v-col>-->
            <!--            </v-row>-->



            <h3 class="title-project mb-2 mt-4">Какой то новый проект</h3>
            <span>+ Добавить задачу</span>

            <!--            <h3 class="title-project mb-4 mt-4">Какой то новый проект</h3>-->

            <!--            <v-row>-->
            <!--              <v-col cols="1" class="pb-0 pt-0"></v-col>-->
            <!--              <v-col cols="10" class="pb-0 pt-0">-->
            <!--                <v-text-field-->
            <!--                    label="Новая задача"-->
            <!--                    dense-->
            <!--                ></v-text-field>-->

            <!--              </v-col>-->
            <!--            </v-row>-->


          </v-card-text>



        </v-card>
      </v-col>








      <!--      ТЕКУЩИЕ-->
      <v-col>

        <v-card
            outlined

        >
          <v-card-title class="justify-center">
            Текущие
          </v-card-title>

          <v-card-subtitle class="text-center">


            <v-row>
              <v-col cols="10">
                <v-text-field
                    label="Добавить задачу"
                    outlined
                    dense
                    height="33px"
                ></v-text-field>
              </v-col>
              <v-col>
                <span>На сегодня</span>
              </v-col>
            </v-row>





            <!--            <v-text-field-->
            <!--                label=" новая задача "-->
            <!--                required-->
            <!--            ></v-text-field>-->
            <!--            -->



          </v-card-subtitle>
          <v-card-text>

            <v-list-item class="todo-item mb-3" v-for="(item, index) in items">

              <v-list-item-action>
                <v-radio></v-radio>
              </v-list-item-action>

              <v-list-item-content>
                <div>{{ item.title + ' ' + index }} </div>
              </v-list-item-content>

              <span class="todo-calendar">Сегодня</span>
              <v-list-item-action>
                <span>x</span>
              </v-list-item-action>
            </v-list-item>

            <!--            <v-subheader class="justify-center">вторник 25.07</v-subheader>-->
            <!--            <v-text-field-->
            <!--                label=" новая задача "-->
            <!--                required-->
            <!--            ></v-text-field>-->

            <!--            <v-list-item class="todo-item">-->
            <!--&lt;!&ndash;              <v-list-item-action>&ndash;&gt;-->
            <!--&lt;!&ndash;                <v-radio></v-radio>&ndash;&gt;-->
            <!--&lt;!&ndash;              </v-list-item-action>&ndash;&gt;-->
            <!--              <v-list-item-content>-->
            <!--                <div>Какая-то рандомная задача 1</div>-->

            <!--                <v-textarea-->
            <!--                    class="mt-2"-->
            <!--                    outlined-->
            <!--                    hide-details-->
            <!--                    value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."-->
            <!--                ></v-textarea>-->
            <!--                <v-btn small color="primary">Сохранить</v-btn>-->


            <!--              </v-list-item-content>-->

            <!--&lt;!&ndash;              <v-list-item-action>&ndash;&gt;-->
            <!--&lt;!&ndash;                <span>x</span>&ndash;&gt;-->
            <!--&lt;!&ndash;              </v-list-item-action>&ndash;&gt;-->

            <!--            </v-list-item>-->


            <v-subheader class="justify-center">среда 26.07 (через два дня)</v-subheader>

            <!--            <v-text-field-->
            <!--                label=" новая задача "-->
            <!--                required-->
            <!--            ></v-text-field>-->

            <v-list-item class="todo-item">
              <v-list-item-action>
                <v-radio></v-radio>
              </v-list-item-action>

              <v-list-item-content>
                <div>Какая-то рандомная задача 1</div>
              </v-list-item-content>

              <span class="todo-calendar">26.07</span>
              <v-list-item-action>
                <span>x</span>
              </v-list-item-action>

            </v-list-item>





            <v-list-item class="todo-item">
              <v-list-item-action>
                <v-radio></v-radio>
              </v-list-item-action>
              <v-list-item-content>
                <div>Какая-то рандомная задача 1</div>
              </v-list-item-content>

              <span class="todo-calendar">26.07</span>
              <v-list-item-action>
                <span>x</span>
              </v-list-item-action>

            </v-list-item>


            <v-textarea
                class="mt-2"
                outlined
                hide-details
                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
            ></v-textarea>
            <v-btn small color="primary">Сохранить</v-btn>




            <!--            <v-subheader class="justify-center">четверг 27.07</v-subheader>-->
            <!--            <v-text-field-->
            <!--                label=" новая задача "-->
            <!--                required-->
            <!--            ></v-text-field>-->


            <!--            <v-subheader class="justify-center">пятница 28.07</v-subheader>-->
            <!--            <v-text-field-->
            <!--                label=" новая задача "-->
            <!--                required-->
            <!--            ></v-text-field>-->

          </v-card-text>
        </v-card>

      </v-col>
      <v-col>

        <v-card
            outlined
        >
          <v-card-title>
            Входящие
            <v-card-text>
              dd
            </v-card-text>
          </v-card-title>
        </v-card>

      </v-col>
    </v-row>


  </v-layout>
</template>

<script>

export default {
  data() {
    return {
      items: [
        {title: 'Какая то рандомная задача'},
        {title: 'Какая то рандомная задача'},
        {title: 'Какая то рандомная задача'},
        {title: 'Какая то рандомная задача'},
        {title: 'Какая то рандомная задача'},
        {title: 'Какая то рандомная задача'},
        {title: 'Какая то рандомная задача'},
      ],
      items2: ['sadf sdsda f', 'dsfadsfsdaf sd', 'dsfsdafsdfds'],
    }
  }
}
</script>

<style scoped>
.todo-item, .project-title {
  font-size: 18px;
}

.todo-calendar {
  font-size: 12px;
  color: #7f828b;
}
</style>
