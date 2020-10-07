<template>
  <div class="container">
    <div class="text-center display-3 mb-4">Books</div>

    <v-card class="pa-4">
      <v-row>
        <v-col>
          <v-list dense>
            <v-subheader> All Books </v-subheader>
            <v-list-item
              v-for="(book, index) in books"
              :key="book.id"
              class="pointer list-item"
            >
              <v-list-item-content @click="getBookDetails(book)">
                <v-list-item-title>
                  {{ index + 1 }}. {{ book.name }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ book.author.name }} - {{ book.genre }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col>
          <v-list>
            <v-subheader> Book Details </v-subheader>
            <div v-if="selectedBook" class="ml-8">
              <v-card-title class="px-0">{{ selectedBook.name }}</v-card-title>
              <v-card-subtitle class="px-0">{{
                selectedBook.genre
              }}</v-card-subtitle>
              <v-list-title class="pa-0"
                >{{ selectedBook.author.name }} -
                {{ selectedBook.author.age }}</v-list-title
              >
              <v-list dense v-if="selectedBook.author.books.length">
                <v-subheader class="pa-0"
                  >Other books of the author</v-subheader
                >
                <v-list-item
                  v-for="(book, index) in selectedBook.author.books"
                  :key="book.name"
                >
                  <v-list-item-content class="py-0">
                    <v-list-item-subtitle
                      >{{ index + 1 }}. {{ book.name }}</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </div>
            <div v-else class="ml-8">
              <small>No book is selected</small>
            </div>
          </v-list>
        </v-col>
      </v-row>
    </v-card>

    <v-tooltip left>
      <template #activator="{ on }">
        <v-btn
          fab
          fixed
          right
          bottom
          class="success"
          v-on="on"
          @click="openBookModal"
        >
          <v-icon large> mdi-plus </v-icon>
        </v-btn>
      </template>
      <span> Add Book </span>
    </v-tooltip>

    <v-dialog v-model="bookModal" :width="600">
      <v-card>
        <v-card-title>
          Add Book
          <v-spacer> </v-spacer>
          <v-btn icon @click="closeBookModal">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <v-form ref="bookForm" @submit="addBook">
            <v-text-field
              label="Book Name"
              v-model="newBook.name"
              required
              :rules="bookFormRules"
            ></v-text-field>
            <v-text-field
              label="Genre"
              v-model="newBook.genre"
              required
              :rules="bookFormRules"
            ></v-text-field>
            <v-select
              :items="authors"
              label="Standard"
              item-text="name"
              item-value="id"
              v-model="newBook.author"
              required
              :rules="bookFormRules"
            ></v-select>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn depressed color="success" @click="addBook">Add Book</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  data() {
    return {
      selectedBook: null,
      bookModal: true,
      newBook: {
        name: "",
        author: "",
        genre: "",
      },
      bookFormRules: [(value) => !!value || "Required."],
    };
  },
  apollo: {
    books: gql`
      query {
        books {
          id
          name
          genre
          author {
            name
            age
            books {
              name
            }
          }
        }
      }
    `,
    authors: gql`
      query {
        authors {
          id
          name
          books {
            name
            id
          }
        }
      }
    `,
  },

  methods: {
    getBookDetails(book) {
      this.selectedBook = book;
    },

    openBookModal() {
      this.bookModal = true;
    },

    closeBookModal() {
      this.$refs.bookForm.resetValidation()
      this.$refs.bookForm.reset()
      this.bookModal = false;
    },

    addBook() {
      if(this.$refs.bookForm.validate()) {
        console.log('success')
      }
    }
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}

.list-item {
  transition: 0.5s;
}

.list-item:hover {
  background-color: rgb(243, 243, 243);
}
</style>
