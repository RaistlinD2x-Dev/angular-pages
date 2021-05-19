import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'xbox',
      url: 'https://images.unsplash.com/photo-1571716846319-21f2bf095516?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmlkZW8lMjBnYW1lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'switch',
      url: 'https://images.unsplash.com/photo-1538895194639-f50554a2ca24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dmlkZW8lMjBnYW1lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'controllers',
      url: 'https://images.unsplash.com/photo-1572537577590-ac6a88150100?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHZpZGVvJTIwZ2FtZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title:'game over',
      url: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHZpZGVvJTIwZ2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'xbox',
      url: 'https://images.unsplash.com/photo-1571716846319-21f2bf095516?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmlkZW8lMjBnYW1lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'switch',
      url: 'https://images.unsplash.com/photo-1538895194639-f50554a2ca24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dmlkZW8lMjBnYW1lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'controllers',
      url: 'https://images.unsplash.com/photo-1572537577590-ac6a88150100?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHZpZGVvJTIwZ2FtZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title:'game over',
      url: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHZpZGVvJTIwZ2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'xbox',
      url: 'https://images.unsplash.com/photo-1571716846319-21f2bf095516?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmlkZW8lMjBnYW1lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'switch',
      url: 'https://images.unsplash.com/photo-1538895194639-f50554a2ca24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dmlkZW8lMjBnYW1lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'controllers',
      url: 'https://images.unsplash.com/photo-1572537577590-ac6a88150100?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHZpZGVvJTIwZ2FtZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title:'game over',
      url: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHZpZGVvJTIwZ2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'xbox',
      url: 'https://images.unsplash.com/photo-1571716846319-21f2bf095516?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmlkZW8lMjBnYW1lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'switch',
      url: 'https://images.unsplash.com/photo-1538895194639-f50554a2ca24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dmlkZW8lMjBnYW1lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'controllers',
      url: 'https://images.unsplash.com/photo-1572537577590-ac6a88150100?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHZpZGVvJTIwZ2FtZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title:'game over',
      url: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHZpZGVvJTIwZ2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'xbox',
      url: 'https://images.unsplash.com/photo-1571716846319-21f2bf095516?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmlkZW8lMjBnYW1lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'switch',
      url: 'https://images.unsplash.com/photo-1538895194639-f50554a2ca24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dmlkZW8lMjBnYW1lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'controllers',
      url: 'https://images.unsplash.com/photo-1572537577590-ac6a88150100?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHZpZGVvJTIwZ2FtZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title:'game over',
      url: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHZpZGVvJTIwZ2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'xbox',
      url: 'https://images.unsplash.com/photo-1571716846319-21f2bf095516?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmlkZW8lMjBnYW1lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'switch',
      url: 'https://images.unsplash.com/photo-1538895194639-f50554a2ca24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dmlkZW8lMjBnYW1lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'controllers',
      url: 'https://images.unsplash.com/photo-1572537577590-ac6a88150100?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHZpZGVvJTIwZ2FtZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title:'game over',
      url: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHZpZGVvJTIwZ2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'xbox',
      url: 'https://images.unsplash.com/photo-1571716846319-21f2bf095516?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmlkZW8lMjBnYW1lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'switch',
      url: 'https://images.unsplash.com/photo-1538895194639-f50554a2ca24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dmlkZW8lMjBnYW1lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'controllers',
      url: 'https://images.unsplash.com/photo-1572537577590-ac6a88150100?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHZpZGVvJTIwZ2FtZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title:'game over',
      url: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHZpZGVvJTIwZ2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    },
    // {
    //   title: 'hot girl 1',
    //   url: 'https://images.unsplash.com/photo-1541433621554-05421e3a3e5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpa2luaXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    // },
    // {
    //   title:'chest and abs',
    //   url: 'https://images.unsplash.com/photo-1582639590011-f5a8416d1101?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlraW5pfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    // },
    // {
    //   title: 'all that yum yum',
    //   url: 'https://images.unsplash.com/photo-1570976447640-ac859083963f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    // },
    // {
    //   title: 'My favorite',
    //   url: 'https://images.unsplash.com/photo-1574539602047-548bf9557352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80'
    // }
  ]

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
