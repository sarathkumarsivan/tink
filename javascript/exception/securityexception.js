// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
////////////////////////////////////////////////////////////////////////////////

goog.module('tink.exception.SecurityException');

/**
 * The base class for all security exceptions.
 */
class SecurityException extends Error {
  /** @param {*=} opt_msg The custom error message. */
  constructor(opt_msg) {
    super(opt_msg);
    this.name = 'SecurityException';
  }
}

exports = SecurityException;
